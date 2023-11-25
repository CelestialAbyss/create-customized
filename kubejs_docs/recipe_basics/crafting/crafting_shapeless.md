# Minecraft Shapeless Recipe Type

> [!NOTE]
> The recipes event is a **server event** which means it belongs in `kubejs/server_scripts` and nowhere else.

A few things that you must note:
- For ProbeJS typing support, you will need to use `event.recipes.minecraft.crafting_shapeless()`
- For shorthand, use `event.shapeless()` instead.
- Recipe output is usually always first with ingredients being second.
- Ingredients in shapeless recipes are defined within a [string array[]]()

```js
ServerEvents.recipes(event => {
    // netherite ingot recipe
    event.recipes.minecraft.crafting_shapeless('minecraft:netherite_ingot', [
        '4x minecraft:netherite_scrap',
        '4x minecraft:gold_ingot'
    ]).id('minecraft:netherite_ingot')
    // cogwheel recipe
    event.shapeless('create:cogwheel', [
        'create:shaft',
        '#minecraft:planks'
    ]).id('create:crafting/kinetics/cogwheel')
    // large cogwheel recipe
    event.shapeless('create:large_cogwheel', [
        'create:shaft',
        '2x #minecraft:planks'
    ]).id('create:crafting/kinetics/large_cogwheel')
    // large cogwheel from little cogwheel recipe
    event.shapeless('create:large_cogwheel', [
        'create:cogwheel',
        '#minecraft:planks'
    ]).id('create:crafting/kinetics/large_cogwheel_from_little')
})
```