# What is a boolean?

Think of a boolean as a `true` or `false` statement.

```js
// for example .keepHeldItem() is a boolean.

ServerEvents.recipes(event => {
    event.recipes.create.deploying('kubejs:buttered_bread', [
        'minecraft:bread',
        'kubejs:butter'
    ]).keepHeldItem(true).id('kubejs:example_bread_buttering_recipe')
    // if .keepHeldItem() is set to false, then the butter would be consumed instantly.
})
```