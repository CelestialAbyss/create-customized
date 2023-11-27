# Create Compacting

1. Outputs as an `array[]` as usual.
  - Chanced outputs as `Item.of('mod_id:item_id').withChance(0.25)` like usual.
2. Inputs as an `array[]` as usual.

A few things to note...
- Create automatically generates a compacting recipe if there is 9x of the same item in a shaped recipe.
- Supports .heated() and .superheated()
- Keep in mind that Create has an auto-insert item stack limit of 16x. Anything higher than that will require manual intervention or specified stack size via the Brass Funnel.
- Use `event.recipes.create.compacting()` instead of `event.recipes.createCompacting()` as it allows for ProbeJS typing support.
- Use two [string arrays[]]() if there are both multiple output results and multiple input ingredients.

The same exact in-game JSON recipes have are used in the examples below. They have also been arranged in alphabetical order according to their recipe ID.

```js
// requires: kubejs_create

ServerEvents.recipes(event => {
    // you should recognize this as the andesite compacting recipe from Create.
    event.recipes.create.compacting('minecraft:andesite', [
        '2x minecraft:flint',
        'minecraft:gravel',
        Fluid.of('minecraft:lava', 100)
    ]).id('create:compacting/andesite_from_flint')
    // blaze cake base recipe
    event.recipes.create.compacting('create:blaze_cake_base', [
        '#forge:eggs',
        'minecraft:sugar',
        'create:cinder_flour'
    ]).id('create:compacting/blaze_cake')
    // chocolate bars
    event.recipes.create.compacting(
        'create:chocolate_bar',
        Fluid.of('create:chocolate', 250)
    ).id('create:compacting/chocolate')
    // diorite from flint
    event.recipes.create.compacting('minecraft:diorite', [
        '2x minecraft:flint',
        'minecraft:calcite',
        Fluid.of('minecraft:lava', 100)
    ]).id('create:compacting/diorite_from_flint')
    // compacting 1000mB of honey into a block
    event.recipes.create.compacting(
        'minecraft:honey_block',
        Fluid.of('#forge:honey', 1000)
    ).id('create:compacting/honey')
})
```