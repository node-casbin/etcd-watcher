import { Etcd3, IOptions } from 'etcd3';
import Bluebird from 'bluebird';

export class EtcdConnection {
  private readonly options?: IOptions;
  public client: Etcd3;

  constructor(options?: IOptions) {
    this.options = options;
  }

  public open() {
    this.client = new Etcd3(this.options);
  }

  public close() {
    console.log('123 :', 123);
    this.client.close();
    console.log('456 :', 456);
  }
}
