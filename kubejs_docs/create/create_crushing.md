# Create Crushing

1. Outputs as an `array[]` as usual.
  - Chanced outputs as `Item.of('mod_id:item_id').withChance(0.25)` like usual.
2. Inputs as an `array[]` as usual.
3. Requires `.processingTime()` to be appended to the end. Although, a default value is assigned if nothing is specified.

```js
ServerEvents.recipes(event => {
    // an example recipe from base create
    event.recipes.create.crushing([
        'create:crushed_raw_gold',
        Item.of('create:experience_nugget').withChance(0.75)
    ], 'minecraft:raw_gold').processingTime(400).id('create:crushing/raw_gold')

    event.recipes.create.crushing([
        Item.of('create:crushed_raw_zinc').withChance(0.3),
        Item.of('create:zinc_nugget').withChance(0.3)
    ], 'create:asurine').processingTime(250).id('create:crushing/asurine')

    event.recipes.create.crushing([
        Item.of('create:crushed_raw_zinc').withChance(0.3),
        Item.of('create:zinc_nugget').withChance(0.3)
    ], '#create:stone_types/asurine').processingTime(250).id('create:crushing/asurine_recycling')

    // below is a custom recipe which is not part of base create
    event.recipes.create.crushing([
        'minecraft:iron_nugget',
        Item.of('minecraft:iron_nugget', 2).withChance(0.12)
    ], 'minecraft:gravel').processingTime(170).id('kubejs:crushing/custom_recipe_id_change_me')
})
```