# What are functions?

Functions can reduce the amount of typing needed, which is especially helpful if your words per minute / typing speed is slow.

Please note that the output items used in this example do not exist! They would have to be created through the usage of startup scripts.

In the example below this is a function used inside of the `ServerEvents.recipes()` nest. Create Above and Beyond uses something similar!

```js
ServerEvents.recipes(event => {
    let donuts = (output, ingredients) => {
        event.recipes.minecraft.crafting_shaped(`kubejs:${output}_donut`, [
            'OOO',
            'O O',
            'OOO'
        ], {
            O: ingredients
        }).id(`kubejs:crafting/${output}_donut`)
    }
    donuts('lapis', 'minecraft:lapis_lazuli')
    donuts('redstone', 'minecraft:redstone')
    donuts('amethyst', 'minecraft:amethyst_shard')
})
```

In the example below this is a function used outside of the `ServerEvents.recipes()` nest.

```js
/**
 * 
 * @description Donut shaped crafting.
 * @param {string} output
 * @param {string} ingredient
 * @param {string} recipeId
 */
function donutCrafting(event, output, ingredient) {
    event.recipes.minecraft.crafting_shaped(`kubejs:${output}_donut`, [
        'OOO',
        'O O',
        'OOO'
    ], {
        O: ingredient
    }).id(`kubejs:crafting/${output}_donut`)
}

ServerEvents.recipes(event => {
    donutCrafting(event, 'lapis', 'minecraft:lapis_lazuli')
    donutCrafting(event, 'redstone', 'minecraft:redstone')
})
```