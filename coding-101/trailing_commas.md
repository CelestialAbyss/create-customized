In JavaScript, trailing commas are allowed. However with JSON, trailing commas are **disallowed**. That's why Visual Studio Code will yell at you and indicate trailing commas with red if there are any.

It is why something like this is allowed in JavaScript...

```js
ServerEvents.recipes(event => {
    event.recipes.minecraft.crafting_shaped('minecraft:chest', [
        'WWW',
        'W W',
        'WWW', // <--- this comma here is a trailing comma 
        // by habit I usually remove trailing commas coming over from JSON
    ], {
        W: '#minecraft:planks',
    }).id('minecraft:chest')
})
```

...but not JSON as seen below. I am sure you can spot the trailing commas next to `"A"` and `"result"`

```json
{
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ASA"
  ],
  "key": {
    "S": { "tag": "minecraft:wool" },
    "A": { "tag": "forge:nuggets/iron" },
  },
  "result": { "item": "create:filter" },
}
```