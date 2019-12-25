import { Watcher } from 'casbin';
import { IOptions } from 'etcd3';
import { EtcdConnection } from './etcd';

export class EtcdWatcher implements Watcher {
  private keyName: string;
  private etcdConnection: EtcdConnection;
  private callback: () => void;

  public static async newWatcher(options?: IOptions, keyName?: string): Promise<EtcdWatcher> {
    return new EtcdWatcher(options, keyName);
  }

  private constructor(options?: IOptions, keyName?: string) {
    this.keyName = keyName || '/casbin';
    this.etcdConnection = new EtcdConnection(options);
    this.etcdConnection.open();

    this.etcdConnection.client.watch().key(this.keyName).create().then(watcher => {
      watcher.on('put', () => {
        if (this.callback) {
          this.callback();
        }
      });
    }).catch(err => {
      throw err;
    });
  }

  public async update(): Promise<boolean> {
    await this.etcdConnection.client.put(this.keyName).value(Date.now()).exec();
    return true;
  }

  public setUpdateCallback(callback: () => void) {
    this.callback = callback;
  }

  public async close(): Promise<void> {
    this.etcdConnection.close();
    console.log('Debug: EtcdWatcher -> close');
  }
}
