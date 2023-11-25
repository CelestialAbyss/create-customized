# Create Filling

```js
ServerEvents.recipes(event => {
    event.recipes.create.filling('minecraft:redstone', [
        'create:cinder_flour',
        Fluid.of('create:potion', 25, '{Bottle: "REGULAR", Potion: "minecraft:strength"}')
    ]).id('create:filling/redstone')
    event.recipes.create.filling('create:honeyed_apple', [
        'minecraft:apple',
        Fluid.of('create:honey', 250)
    ]).id('create:filling/honeyed_apple')
    event.recipes.create.filling('create:sweet_roll', [
        'minecraft:bread',
        Fluid.of('minecraft:milk', 250)
    ]).id('create:filling/sweet_roll')
})
```