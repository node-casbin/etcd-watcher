# etcd-watcher

ETCD watcher for node-casbin

# Installation

```shell script
# NPM
npm install --save etcd-watcher

# Yarn
yarn add etcd-watcher
```

# Simple Example
```typescript
import { EtcdWatcher } from 'etcd-watcher';
import { newEnforcer } from 'casbin';

// Initialize the watcher.
const watcher = await RedisWatcher.newWatcher('http://127.0.0.1:2379');

// Initialize the enforcer.
const enforcer = await newEnforcer('examples/authz_model.conf', 'examples/authz_policy.csv');

enforcer.setWatcher(watcher);

// By default, the watcher's callback is automatically set to the
// enforcer's loadPolicy() in the setWatcher() call.
// We can change it by explicitly setting a callback.
watcher.setUpdateCallback(() => console.log('Casbin need update'));

```
