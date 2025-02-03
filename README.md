# eslint-config-react-native

## Install

1. Install Eslint on your projet

```shell
yarn add --dev eslint @eslint/js
```

2. Install config

```shell
yarn add --dev @nodstudio/eslint-config-react-native
```

3. Add config to yours

```js
import nodStudioConfigReactNative from "@nodstudio/eslint-config-react-native";

export default [
    // ...
    ...nodStudioConfigReactNative
];
```
