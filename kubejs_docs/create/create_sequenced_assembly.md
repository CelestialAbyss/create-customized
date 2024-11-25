# Create Sequenced Assembly

A sequenced assembly recipe is structured as follows:

1. Recipe results are written as a `string` or `string[array]`
  - The first item in the string array list is what is displayed in JEI / REI as the desired outcome
  - The items that are below the first item are considered **salvage**
  - Create uses a weight system, so keep that in mind when trying to get specific percentages for salvage. Higher weight = higher chance that specific outcome will occur if that isn't already obvious.
2. Only accepts 4 different Create recipe types for each step in the sequenced assembly recipe.
  - Cutting which is written as: `event.recipes.create.cutting()`
  - Deploying which is written as: `event.recipes.create.deploying()`
  - Filling which is written as: `event.recipes.create.filling()`
  - Pressing which is written as: `event.recipes.create.pressing()`
3. Recipe sequence is written within the second `array[]`.
4. The transitional item is written as a string in `.transitionalItem()`
  - For example: `.transitionalItem('create:incomplete_precision_mechanism')`
5. The amount of times the sequence must be repeated. This is specified with `.loops()` For example `.loops(5)` means that the sequence will have to be looped 5 times to get the output results to occur.

> [!IMPORTANT]
> Don't forget your commas in the list! They are NEEDED! How is the computer supposed to know what is separate from each other?

Below are examples that are 1:1 with Create's own sequenced assembly recipes based on the existing .json files in the GitHub repository.

```js
// requires: kubejs_create

ServerEvents.recipes(event => {
    /*
    Since the Sturdy Sheet recipe does not have multiple outputs, it is not necessary to make an array.
    Just use a comma after the string then declare the ingredient item as a string.
    */
    event.recipes.create.sequenced_assembly('create:sturdy_sheet', 'create:powdered_obsidian', [
        event.recipes.create.filling('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet', Fluid.of('minecraft:lava', 500)]),
        event.recipes.create.pressing('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet'),
        event.recipes.create.pressing('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet')
    ]).transitionalItem('create:unprocessed_obsidian_sheet').loops(1).id('create:sequenced_assembly/sturdy_sheet')
    /*
    The Precision Mechanism recipe on the other hand is not guaranteed. Notice how all of the results are
    in a list?
    */
    event.recipes.create.sequenced_assembly([
        Item.of('create:precision_mechanism').withChance(120.0), // Item.of().withChance() is required for chanced outputs
        Item.of('create:golden_sheet').withChance(8.0),
        Item.of('create:andesite_alloy').withChance(8.0),
        Item.of('create:cogwheel').withChance(5.0),
        Item.of('minecraft:gold_nugget').withChance(3.0),
        Item.of('create:shaft').withChance(2.0),
        Item.of('create:crushed_raw_gold').withChance(2.0),
        'minecraft:iron_ingot',
        'minecraft:clock'
    ], '#forge:plates/gold', [
        event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
        event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
        event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:nuggets/iron'])
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(5).id('create:sequenced_assembly/precision_mechanism')
    /*
    The Track recipe is a bit interesting in that the JSON recipe uses two tags for ingredients inside a json array... soooo
    this is reflected below in the individual steps.
    */
    event.recipes.create.sequenced_assembly('create:track', '#create:sleepers', [
        event.recipes.create.deploying('create:incomplete_track', ['create:incomplete_track', ['#forge:nuggets/iron', '#forge:nuggets/zinc']]),
        event.recipes.create.deploying('create:incomplete_track', ['create:incomplete_track', ['#forge:nuggets/iron', '#forge:nuggets/zinc']]),
        event.recipes.create.pressing('create:incomplete_track', 'create:incomplete_track')
    ]).transitionalItem('create:incomplete_track').loops(1).id('create:sequenced_assembly/track')
})
```

If you wish to register a custom item for use as a transitional item in a sequenced assembly recipe, you can do so by pasting this in a `.js` file placed into the `kubejs/startup_scripts` folder.

```js
StartupEvents.registry('item', event => {
	event.create('kubejs:incomplete_spore_blossom', 'create:sequenced_assembly')
})
```

The texture is automatically referenced as long as it's in the same resource location. In this case, it will be `assets/kubejs/textures/item/incomplete_spore_blossom.png`.
