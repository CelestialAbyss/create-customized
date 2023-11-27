# Minecraft Blasting Recipe Type

> [!NOTE]
> The recipes event is a **server event** which means it belongs in `kubejs/server_scripts` and nowhere else.

1. First arguement is output result, as usual.
2. Second arguement is the input. 

A few things that you must note:
- For ProbeJS typing support, you will need to use `event.recipes.minecraft.blasting()`
- For shorthand, use `event.blasting()` instead.
- Create will automatically auto-generate Bulk Blasting recipes.

The blasting recipe type supports the following:
- `.cookingTime()`
  - The default cooking time for blasting is 100t or 5s
- `.xp()`
  - Accepts decimal values like 0.35. Blasting Raw Iron in the Blast Furnace for example gives 0.7 XP when done.

The examples below are 1:1 to Minecraft's own existing blasting recipes in-game.

```js
ServerEvents.recipes(event => {
    // probejs support
    event.recipes.minecraft.blasting(
        'minecraft:iron_ingot',
        'minecraft:raw_iron'
    ).cookingTime(100).xp(0.7).id('minecraft:iron_ingot_from_blasting_raw_iron')
    // and no, I do not know why Mojang made the recipe ID so long.
    event.blasting(
        'minecraft:copper_ingot',
        'minecraft:raw_copper'
    ).cookingTime(100).xp(0.7).id('minecraft:copper_ingot_from_blasting_raw_copper')
    event.blasting(
        'minecraft:gold_ingot',
        'minecraft:raw_gold'
    ).cookingTime
})
```