# etcd-watcher

ETCD watcher for node-casbin

# Installation

```shell script
# NPM
npm install --save @casbin/etcd-watcher

# Yarn
yarn add @casbin/etcd-watcher
```

# Simple Example
```typescript
import EtcdWatcher from '@casbin/etcd-watcher';
import { newEnforcer } from 'casbin';

// Initialize the watcher.
const watcher = await EtcdWatcher.newWatcher('http://127.0.0.1:2379');

// Initialize the enforcer.
const enforcer = await newEnforcer('examples/authz_model.conf', 'examples/authz_policy.csv');

enforcer.setWatcher(watcher);
```
