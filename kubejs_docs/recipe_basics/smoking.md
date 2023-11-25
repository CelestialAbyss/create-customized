# Minecraft Smoking Recipe Type

> [!NOTE]
> The recipes event is a **server event** which means it belongs in `kubejs/server_scripts` and nowhere else.

A few things that you must note:
- For ProbeJS typing support, you will need to use `event.recipes.minecraft.smoking()`
- For shorthand, use `event.smoking()` instead.

The smoking recipe type supports the following:
- `.cookingTime()`
  - The default cooking time for furnace smoking is 100t or 10s
- `.xp()`
  - Accepts decimal values like 0.35. Cooking Raw Beef in the furnace for example gives 0.35 XP when done smoking 1x.

```js
// 1:1 in-game recipes are used for this example.
ServerEvents.recipes(event => {
    // probejs typing support
    event.recipes.minecraft.smoking('minecraft:cooked_beef', 'minecraft:beef').cookingTime(100).xp(0.35).id('minecraft:cooked_beef_from_smoking')
    event.smoking('minecraft:cooked_porkchop', 'minecraft:porkchop').cookingTime(100).xp(0.35).id('minecraft:cooked_porkchop_from_smoking')
    event.smoking('minecraft:chicken', 'minecraft:cooked_chicken').cookingTime(100).xp(0.35).id('minecraft:cooked_chicken_from_smoking')
})
```