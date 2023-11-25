# Minecraft Smelting Recipe Type

> [!NOTE]
> The recipes event is a **server event** which means it belongs in `kubejs/server_scripts` and nowhere else.

A few things that you must note:
- For ProbeJS typing support, you will need to use `event.recipes.minecraft.smelting()`
- For shorthand, use `event.smelting()` instead.
- Create will automatically auto-generate blasting and smoking recipes if applicable. However, tagged ingredients don't seem to be able to specify what recipe type is used.[^1]

The smelting recipe type supports the following:
- `.cookingTime()`
  - The default cooking time for furnace smelting is 200t or 10s
- `.xp()`
  - Accepts decimal values like 0.35. Cooking Raw Beef in the furnace for example gives 0.35 XP when done smelting 1x.

```js
// 1:1 in-game recipes are used for this example.
ServerEvents.recipes(event => {
    // probejs typing support
    event.recipes.minecraft.smelting('minecraft:cooked_beef', 'minecraft:beef').cookingTime(200).xp(0.35).id('minecraft:cooked_beef')
    event.smelting('minecraft:cooked_porkchop', 'minecraft:porkchop').cookingTime(200).xp(0.35).id('minecraft:cooked_porkchop')
    event.smelting('minecraft:chicken', 'minecraft:cooked_chicken').cookingTime(200).xp(0.35).id('minecraft:cooked_chicken')
})
```

[^1]: For example, when you use the tag that all raw egg items use, Create makes a blasting recipe for whatever reason.