import { Etcd3, IOptions } from 'etcd3';

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
    this.client.close();
  }
}
