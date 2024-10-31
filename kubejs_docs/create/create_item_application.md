# Create Item Application

So you know the first time you make 1x Andesite Alloy and have to right-click some stripped logs? That's this recipe type.

> [!IMPORTANT]
> Item Application recipes always have an accompanying Deploying recipe that gets automatically generated.

> [!NOTE]
> Recipe viewers like JEI and REI can only show a maximum of 4 recipe outputs without any visual problems. More than 4 recipe outcomes may result in undesired issues in the UI.

1. Recipe results are written as a `string` or `string[array]`
  - Results support chanced outputs which are written like: `Item.of('kubejs:example_item').withChance(0.25)
2. Ingredients are handled a bit differently, and the order they are written in **does matter**.
  - First input ingredient must be a stationary block.
  - Second input ingredient is the item used on right-click.
3. Supports `.keepHeldItem()`

Here are examples from [1.19.2 Create](https://github.com/Creators-of-Create/Create/tree/mc1.19/dev/src/generated/resources/data/create/recipes/item_application)

```js
ServerEvents.recipes(event => {
  /**
   * Both Andesite Casing recipes to account for both
   * stripped logs and stripped wood blocks.
   */
  event.recipes.create.item_application('create:andesite_casing', [
    '#forge:stripped_logs',
    'create:andesite_alloy'
  ]).id('create:item_application/andesite_casing_from_log')
  event.recipes.create.item_application('create:andesite_casing', [
    '#forge:stripped_wood',
    'create:andesite_alloy'
  ]).id('create:item_application/andesite_casing_from_wood')
  /**
   * Unlike Andesite Alloy, Brass Ingots are tagged with a common tag that unifies
   * all brass ingots should another mod add its own brass ingots.
   */
  event.recipes.create.item_application('create:brass_casing', [
    '#forge:stripped_logs',
    '#forge:ingots/brass'
  ]).id('create:item_application/brass_casing_from_log')
  event.recipes.create.item_application('create:brass_casing', [
    '#forge:stripped_wood',
    '#forge:ingots/brass'
  ]).id('create:item_application/brass_casing_from_wood')
  /**
   * Since Train Casings don't come from stripped logs or woods, they simply use Brass Casing
   * as the ingredient.
   * 
   * Also notice how the item ID of Train Casing is different.
   * 'create:railway_casing' instead of 'create:train_casing'
   */
  event.recipes.create.item_application('create:railway_casing', [
    'create:brass_casing',
    '#forge:plates/obsidian'
  ]).id('create:item_application/railway_casing')
})
```