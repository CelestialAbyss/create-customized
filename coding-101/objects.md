# What is an object?

Objects are usually indicated by curly brackets `{}`, you would be familiar with them if you have looked at the `.json` files in a datapack.

Below is an example of a JSON object. The `"key"` is also an object with.

```json
{
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "LLA",
    "L  ",
    "IC "
  ],
  "key": {
    "L": { "tag": "forge:plates/brass" },
    "I": { "item": "create:precision_mechanism" },
    "A": { "item": "create:andesite_alloy" },
    "C": { "item": "create:brass_casing" }
  },
  "result": { "item": "create:mechanical_arm" }
}
```

Below is an example of a JS object declared with `js_object_example`

```js
let js_object_example = {
    red: 'RED',
    green: 'GREEN',
    blue: 'BLUE',
}
```