// priority: 0

onEvent('item.registry', event => { // Register new ITEMS here 
    // event.create('kubejs:example_item').displayName('Example Item')

})

onEvent('block.registry', event => { // Register new BLOCKS here
    // event.create('kubejs:example_block').material('wood').hardness(1.0).displayName('Example Block')

})

onEvent('fluid.registry', event => { // Register new FLUIDS here
    event.create('kubejs:example_water_texture_fluid').displayName('Example Water')
        .thinTexture(0x446FE9)
        .bucketColor(0x446FE9)
    event.create('kubejs:example_lava_texture_fluid').displayName('Example Lava')
        .thickTexture(0xE38C3F)
        .bucketColor(0xE38C3F)
})