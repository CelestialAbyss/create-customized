# Minecraft Shaped Recipe Type

<!--

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

-->

> [!NOTE]
> The recipes event is a **server event** which means it belongs in `kubejs/server_scripts` and nowhere else.

A shaped crafting recipe is structured in the following order:

1. The recipe result / output item stack is typed as a **string**
2. The pattern is typed as a **string[array]**
3. The keys are typed as part of an **object{}** with each key

A few things that you must note:

- For ProbeJS typing support, you will need to use `event.recipes.minecraft.crafting_shaped()`
- For shorthand, use `event.shaped()` instead.
- Recipe output is usually always first with ingredients being second.
- Empty spaces represent blank slots on the crafting grid.
- Letters A-Z **do not** have to be defined as [strings]() in the [object{}] that defines what the items the keys are.

> [!NOTE]
> You can have multiple recipes under one nested ServerEvents.recipes() event listener. Do not use multiple listeners in the same script file.

Just to break it down for you in the following code block...

```js
ServerEvents.recipes(event => {
    // probejs typing support
    // the recipe result AKA output always comes first.
    event.recipes.minecraft.crafting_shaped('create:gearbox', [
        ' A ',
        'ABA',
        ' A '
        ], {
            A: 'create:cogwheel', // what item is represented by A
            B: 'create:andesite_casing' // what item is represented by B
    }).id('create:crafting/kinetics/gearbox')
    event.shaped('minecraft:bow', [
        '#S ',
        '# S',
        '#S '
    ], {
        '#': // since this is using the hashtag sign, a special character, you will notice that VSC is highlighting it red whenever you try to unstring it.
        S: 'minecraft:stick'
    }).id('minecraft:bow')
})
```

A few things about shaped recipes to make you aware of their limitations.

1. The output item usually only supports a stack size of 1-64.
2. You are obviously limited to 3 rows, 3 columns.
3. Fluids are not supported, only items.

> [!TIP]
> For troubleshooting and in-game aesthetics when advanced tooltips are enabled, attach a recipe ID to your recipe by adding `.id()` at the end.

## Shaped Recipe Examples

1:1 in-game recipes have been used for the examples below.

```js
ServerEvents.recipes(event => {
    // iron sword recipe from Minecraft
    event.shaped('minecraft:iron_sword', [
        'I',
        'I',
        'S'
    ], {
        I: 'minecraft:iron_ingot',
        S: 'minecraft:stick'
    }).id('minecraft:iron_sword')
    // shaft recipe from create
    event.shaped('create:shaft', [
        'A',
        'A'
    ], {
        A: 'create:andesite_alloy'
    }).id('create:crafting/kinetics/shaft')
    // gearbox recipe from create
    event.shaped('create:gearbox', [
        ' C ',
        'CAC',
        ' C '
    ], {
        C: 'create:cogwheel',
        A: 'create:andesite_casing'
    }).id('create:crafting/kinetics/gearbox')
})
```