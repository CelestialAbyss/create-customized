// requires: create
// side: client

/*
This script NEEDS to go inside kubejs/startup_scripts.

Here are all the currently supported palettes as of 0.5.1c.

STANDARD_CREATE
---
BLUE
GREEN
YELLOW
RED
PURPLE
GRAY
---
ALL_GRAY
GRAY_AND_BLUE
GRAY_AND_WHITE
GRAY_AND_GOLD
GRAY_AND_RED
---
{
    "item.create.example_item.tooltip": "EXAMPLE ITEM (just a marker that this tooltip exists)",
    "item.create.example_item.tooltip.summary": "A brief description of the item. _Underscores_ highlight a term.",
    "item.create.example_item.tooltip.condition1": "When this",
    "item.create.example_item.tooltip.behaviour1": "Then this item does this. (behaviours show on shift)",
    "item.create.example_item.tooltip.condition2": "And When this",
    "item.create.example_item.tooltip.behaviour2": "You can add as many behaviours as you like",
    "item.create.example_item.tooltip.control1": "When Ctrl pressed",
    "item.create.example_item.tooltip.action1": "These controls are displayed.",
}
*/

const $ItemDescription = Java.loadClass('com.simibubi.create.foundation.item.ItemDescription$Modifier')
const $TooltipModifier = Java.loadClass('com.simibubi.create.foundation.item.TooltipModifier')
const $Palette = Java.loadClass('com.simibubi.create.foundation.item.TooltipHelper$Palette')

/*
You can use a list and then use a for loop like I did to add items by color palette, but here is
essentially what it boils down to. However, you can just make a function to make this easier.

This script NEEDS to go inside kubejs/startup_scripts, if you missed the first message.
*/

ClientEvents.init(event => {
    $TooltipModifier.REGISTRY.register('modid:item_id', new $ItemDescription('modid:item_id', $Palette.STANDARD_CREATE))
    $TooltipModifier.REGISTRY.register('modid:item_id', new $ItemDescription('modid:item_id', $Palette.BLUE))
    $TooltipModifier.REGISTRY.register('modid:item_id', new $ItemDescription('modid:item_id', $Palette.GREEN))
    $TooltipModifier.REGISTRY.register('modid:item_id', new $ItemDescription('modid:item_id', $Palette.YELLOW))
    $TooltipModifier.REGISTRY.register('modid:item_id', new $ItemDescription('modid:item_id', $Palette.RED))
    $TooltipModifier.REGISTRY.register('modid:item_id', new $ItemDescription('modid:item_id', $Palette.PURPLE))
    $TooltipModifier.REGISTRY.register('modid:item_id', new $ItemDescription('modid:item_id', $Palette.GRAY))
})

/*
Once you have this written or something else, follow the JSON snippet above as the tooltip schema.
It can all be included in one lang JSON file located in kubejs/assets/lang/en_us.json

You could use JsonIo to automate this process, but I don't know how to do that yet.

If it's a block, use this instead.

{
    "block.modid.example_id.tooltip": "EXAMPLE ID",
    "block.modid.example_id.tooltip.summary": "Example summary _with_ highlighted words",
    "block.modid.example_id.tooltip.condition1": "Condition 1 up to 100",
    "block.modid.example_id.tooltip.behaviour1": "etc etc"
}

*/


/*
Here's my implementation below.
*/

let STANDARD_PALETTE = [
    'minecraft:wooden_pickaxe',
    'minecraft:stone_pickaxe',
    'minecraft:iron_pickaxe',
    'minecraft:fletching_table',
    'minecraft:dried_kelp_block',
    'minecraft:coal_block',
    'minecraft:diamond_block',
    'create:item_vault',
    'extendedcrafting:handheld_table',
    'farmersdelight:skillet',
    'farmersdelight:stove',
    'chalk:chalk_box'
]
let BLUE_PALETTE = [
    'minecraft:soul_campfire',
    'minecraft:beacon',
    'minecraft:lapis_lazuli'
]
let GREEN_PALETTE = [
    'minecraft:bone_meal'
]
let YELLOW_PALETTE = [
    'minecraft:campfire',
    'cataclysm:infernal_forge',
    'cataclysm:monstrous_helm',
    'cataclysm:burning_ashes',
    'cataclysm:the_incinerator',
    'cataclysm:ignitium_helmet',
    'cataclysm:ignitium_chestplate',
    'cataclysm:ignitium_leggings',
    'cataclysm:ignitium_boots',
    'cataclysm:bulwark_of_the_flame'
]
let RED_PALETTE = [
    'kubejs:removed_item',
    'minecraft:nether_star',
    'minecraft:netherrack',
    'cataclysm:wither_assault_shoulder_weapon'
]
let PURPLE_PALETTE = [
    'minecraft:dragon_egg',
    'eccentrictome:tome',
    'kubejs:denied_result',
    'kubejs:command_block',
    'kubejs:chain_command_block',
    'kubejs:repeating_command_block',
    'kubejs:high_entropy_alloy',
    'kubejs:final_pickaxe',
    'kubejs:final_axe',
    'kubejs:final_shovel',
    'kubejs:final_hoe',
    'kubejs:final_sword',
    'kubejs:final_lance',
    'kubejs:final_helmet',
    'kubejs:final_chestplate',
    'kubejs:final_leggings',
    'kubejs:final_boots',
    'cataclysm:gauntlet_of_guard',
    'cataclysm:gauntlet_of_bulwark',
    'cataclysm:void_scatter_arrow',
    'cataclysm:void_core',
    'cataclysm:void_forge',
    'cataclysm:void_assault_shoulder_weapon',
    'cataclysm:abyssal_sacrifice',
    'cataclysm:tidal_claws',
    'cataclysm:abyssal_egg'
]
let GRAY_PALETTE = [
    'minecraft:rotten_flesh',
    'minecraft:pointed_dripstone',
    'minecraft:andesite',
    'minecraft:cobblestone',
    'minecraft:cobbled_deepslate',
    'minecraft:gravel',
    'kubejs:deepslate_shard',
]

ClientEvents.init(event => {
    STANDARD_PALETTE.forEach(itemID => {
        $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.STANDARD_CREATE))
    })
    BLUE_PALETTE.forEach(itemID => {
        $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.BLUE))
    })
    GREEN_PALETTE.forEach(itemID => {
        $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.GREEN))
    })
    YELLOW_PALETTE.forEach(itemID => {
        $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.YELLOW))
    })
    RED_PALETTE.forEach(itemID => {
        $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.RED))
    })
    PURPLE_PALETTE.forEach(itemID => {
        $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.PURPLE))
    })
    GRAY_PALETTE.forEach(itemID => {
        $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.GRAY))
    })
})

/*
And if you want to use functions, here's that as well. For those who are new to
JavaScript, @params are just there to let you know exactly what to use.
*/

/**
 * 
 * @param {string} itemID 
 */
function STANDARD(itemID) {
    $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.STANDARD_CREATE))
}

/**
 * 
 * @param {string} itemID 
 */
function BLUE(itemID) {
    $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.STANDARD_CREATE))
}

/**
 * 
 * @param {string} itemID 
 */
function GREEN(itemID) {
    $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.GREEN))
}

/**
 * 
 * @param {string} itemID 
 */
function YELLOW(itemID) {
    $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.YELLOW))
}

/**
 * 
 * @param {string} itemID 
 */
function RED(itemID) {
    $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.RED))
}

/**
 * 
 * @param {string} itemID 
 */
function PURPLE(itemID) {
    $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.PURPLE))
}

/**
 * 
 * @param {string} itemID 
 */
function GRAY(itemID) {
    $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.GRAY))
}

/*
Then that simplifies it into...
*/

ClientEvents.init(event => {
    STANDARD('modid:item_id')
    BLUE('modid:item_id')
    // etc etc.
})
