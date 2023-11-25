# Create Emptying



```js
ServerEvents.recipes(event => {
    event.recipes.create.emptying([
        Fluid.of('create:honey', 250),
        'minecraft:glass_bottle'
    ], 'minecraft:honey_bottle').id('create:emptying/honey_bottle')
    event.recipes.create.emptying([
        Fluid.of('create:tea', 250),
        'minecraft:glass_bottle'
    ], 'create:builders_tea').id('create:emptying/builders_tea')
})
```