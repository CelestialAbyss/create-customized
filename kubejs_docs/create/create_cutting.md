# Create Cutting

A few things to note:
- Accepts multiple chanced outputs[] and inputs[]
- .processingTime() is mandatory to specify time to process.

```js
// requires: kubejs_create

ServerEvents.recipes(event => {
    event.recipes.create.cutting('6x create:shaft', 'create:andesite_alloy').id('create:cutting/andesite_alloy')
    // for easy implementation of all of create's base cutting recipes for wooden planks, let's use two lists.
    let wood_types = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove']
    wood_types.forEach(type => {
        event.recipes.create.cutting(`6x minecraft:${type}_planks`, `minecraft:stripped_${type}_log`)
            .processingTime(50)
            .id(`create:cutting/stripped_${type}_log`)
        event.recipes.create.cutting(`6x minecraft:${type}_planks`, `minecraft:stripped_${type}_wood`)
            .processingTime(50)
            .id(`create:cutting/stripped_${type}_wood`)
    })
    let nether_wood = ['crimson', 'warped']
    nether_wood.forEach(type => {
        event.recipes.create.cutting(`6x minecraft:${type}_planks`, `minecraft:stripped_${type}_hyphae`).processingTime(50).id(`create:cutting/stripped_${type}_hyphae`)
        event.recipes.create.cutting(`6x minecraft:${type}_planks`, `minecraft:stripped_${type}_stem`).processingTime(50).id(`create:cutting/stripped_${type}_stem`)
    })
})
```