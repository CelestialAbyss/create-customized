// Here is where you modify item and armor durability, register custom blocks, fluids and items... it's a lot.
// on the .texture() for armor items IT IS FOR THE ITEM ICON! Please refer to the file path of vanilla armor models to change the texture of the actual armor
StartupEvents.registry('item', event => {
    // folder path for your custom items is always going to be kubejs\assets\kubejs\item\ just like a resourcepack
    event.create('kubejs:example_item').texture('kubejs:item/example_item').maxStackSize(64)
    // tools
    event.create('kubejs:example_pickaxe', 'pickaxe').tier('example_item_tier').texture('kubejs:item/example_pickaxe').maxStackSize(1).fireResistant(true).group('tools')
    event.create('kubejs:example_axe', 'axe').tier('example_item_tier').texture('kubejs:item/example_axe').maxStackSize(1).fireResistant(true).group('tools')
    event.create('kubejs:example_shovel', 'shovel').tier('example_item_tier').texture('kubejs:item/example_shovel').maxStackSize(1).fireResistant(true).group('tools')
    event.create('kubejs:example_hoe', 'hoe').tier('example_item_tier').texture('kubejs:item/example_hoe').maxStackSize(1).fireResistant(true).group('tools')
    // weapons
    event.create('kubejs:example_sword', 'sword').tier('example_item_tier').texture('kubejs:item/example_sword').maxStackSize(1).fireResistant(true).group('combat')
    // armor
    event.create('kubejs:example_helmet', 'helmet').tier('example_armor_tier').texture('kubejs:item/example_helmet').maxStackSize(1).fireResistant(true).group('combat')
    event.create('kubejs:example_chestplate', 'chestplate').tier('example_armor_tier').texture('kubejs:item/example_chestplate').maxStackSize(1).fireResistant(true).group('combat')
    event.create('kubejs:example_leggings', 'leggings').tier('example_armor_tier').texture('kubejs:item/example_leggings').maxStackSize(1).fireResistant(true).group('combat')
    event.create('kubejs:example_boots', 'boots').tier('example_armor_tier').texture('kubejs:item/example_boots').maxStackSize(1).fireResistant(true).group('combat')
})

StartupEvents.registry('block', event => {
    // Register new blocks here event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})
StartupEvents.registry('fluid', event => {
    event.create('kubejs:example_purple_lava').thickTexture(0x7800FF).bucketColor(0x7800FF).luminosity(14)
})