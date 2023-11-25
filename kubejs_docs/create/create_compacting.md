# Create Compacting

A few things to note...
- Create automatically generates a compacting recipe if there is 9x of the same item in a shaped recipe.
- Supports .heated() and .superheated()
- Keep in mind that Create has an auto-insert item stack limit of 16x. Anything higher than that will require manual intervention or specified stack size via the Brass Funnel.
- Use `event.recipes.create.compacting()` instead of `event.recipes.createCompacting()` as it allows for ProbeJS typing support.
- Use two [string arrays[]]() if there are both multiple output results and multiple input ingredients.

In-game recipes have been used in the examples below.

```js
ServerEvents.recipes(event => {
    event.recipes.create.compacting('create:blaze_cake_base', [
        '#forge:eggs',
        'minecraft:sugar',
        'create:cinder_flour'
    ]).id('create:compacting/blaze_cake')
    event.recipes.create.compacting('minecraft:andesite', [
        '2x minecraft:flint',
        'minecraft:gravel',
        Fluid.of('minecraft:lava', 100)
    ]).id('create:compacting/andesite_from_flint')
    event.recipes.create.compacting('minecraft:honey_block', Fluid.of('#forge:honey', 1000)).id('create:compacting/honey')
})
```