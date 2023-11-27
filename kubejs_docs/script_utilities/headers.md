# Script Headers

KubeJS can read header comments from the top of your scripts to determine:

- Script priority
- Required mods
- If the script should be ignored or not

It is highly recommended to use `//requires: kubejs_create` so that KubeJS does not throw out errors when loading scripts that require KubeJS Create to be present. You can't expect KubeJS to read a function that doesn't exist without its Create dictionary, right?

The script below will only load when KubeJS Create is present.

```js
//priority: 0
//requires: kubejs_create
//ignored: false

console.log('KubeJS Create detected! Create recipes...')

```

The script below will be completely ignored even if the required mods are present.

```js
//priority: 0
//requires: kubejs_create
//requires: modernfix
//ignored: true

```