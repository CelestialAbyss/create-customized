/*
Hi! If you're new to KubeJS here are some guidelines you should follow.

And the line breaks are purely just for organization and readability.

All of your recipeIDs must obey the following:
- All lowercase letters a-z
- Only numerical digits like 0-9
- Must go at the end of your recipe's ) closing parentheses AND after .heated() or .superheated() if applicable, just for the sake of formatting.
- Only use _ for spaces.
- Accepts / as well
-----------------------------------------------------------------------------------------------------------
All itemIDs must obey the following:
- All lower case letters
- ALWAYS use the mod's ID prefix. As an example here's what a modid looks like 'create:' then you add the itemid 'create:copper_nugget'
- NO NUMBERS
- Must always be a string. That means it must always be inside either 'between_these' or "between_these"
-----------------------------------------------------------------------------------------------------------
Chanced outputs must always use Item.of('create:example_item').withChance(0.XX)
*/

// I highly recommend copying and pasting into Visual Studio Code for proper viewing.
// Everything here requires* KubeJS 6.1 with Create 0.5.1c.
// *just for the sake of compatibility purposes since the Mixing and Compacting fix was only applied after KJS 6.1's release for the KJS Create add-on.

ServerEvents.recipes(event => {
    // compacting recipes
	event.recipes.createCompacting([
		'minecraft:sponge', // can also be written as Item.of('minecraft:sponge') see below
		Fluid.of('minecraft:water', 1000)
	], [
		'minecraft:wet_sponge'
	]).id('create_customized:sponge_squeezing')
	event.recipes.createCompacting([
		Item.of('minecraft:sponge'), 
		Fluid.of('minecraft:water', 1000)
	], [
		'minecraft:wet_sponge'
	]).id('create_customized:sponge_squeezing')

    event.recipes.createCompacting([
        'minecraft:diamond'
    ], [
		Item.of('minecraft:coal_block', 9), 
		Fluid.of('minecraft:lava', 250)
	]).superheated().id('create_customized:renew_diamond')

    event.recipes.createCompacting([
		'minecraft:coal'
	], [
		Item.of('minecraft:dried_kelp_block', 9)
	]).heated().id('create_customized:renew_coal')

    event.recipes.createCompacting([
		'minecraft:basalt'
	], [
		'minecraft:blue_ice', 
		Fluid.of('minecraft:lava', 500)
	]).id('create_customized:compacting_basalt')

    event.recipes.createCompacting([
		'minecraft:tuff'
	], [
		Item.of('minecraft:gravel', 18),
		Fluid.of('minecraft:lava', 250)
	]).superheated().id('create_customized:renew_tuff')

    event.recipes.createCompacting([
		'minecraft:tuff'
	], [
		Item.of('minecraft:deepslate', 9),
		Fluid.of('minecraft:lava', 250)
	]).heated().id('create_customized:renew_deepslate_tuff')

    // crushing
    event.remove({id: 'create:crushing/gravel'})
    event.remove({id: 'create:crushing/netherrack'})
    event.recipes.createCrushing([
		'minecraft:dirt',
		Item.of('minecraft:flint').withChance(0.10)
	], 'minecraft:gravel').processingTime(250).id('create_customized:gravel_crushing')
    event.recipes.createCrushing([
		'minecraft:sand',
		Item.of('minecraft:clay_ball').withChance(0.05)
	], 'minecraft:dirt').processingTime(250).id('create_customized:dirt_crushing')
    event.recipes.createCrushing([
		Item.of('minecraft:pointed_dripstone', 4),
		Item.of('minecraft:clay_ball').withChance(0.50),
		Item.of('create:copper_nugget').withChance(0.25),
		Item.of('create:experience_nugget').withChance(0.75)
	], 'minecraft:dripstone_block').processingTime(250).id('create_customized:dripstone_crushing')
    event.recipes.createCrushing([
		Item.of('create:copper_nugget').withChance(0.05),
		Item.of('minecraft:gunpowder').withChance(0.10)
	], 'minecraft:basalt').id('create_customized:basalt_crushing')
    event.recipes.createCrushing([
		'create:cinder_flour',
		Item.of('create:cinder_flour').withChance(0.50),
		Item.of('minecraft:netherite_scrap').withChance(0.002)
	], 'minecraft:netherrack').processingTime(250).id('create_customized:netherrack_crushing')
    // filling
    event.recipes.createFilling('netherrack', [
		'minecraft:cobblestone', 
		Fluid.of('create:potion', 250, '{Potion: "minecraft:strong_healing"}')
	]).id('create_customized:living_flesh_stone')
    // haunting
    event.recipes.createHaunting(['minecraft:deepslate'], 'minecraft:andesite').id('create_customized:andesite_haunting')
    event.recipes.createHaunting(['minecraft:crying_obsidian'], 'minecraft:obsidian').id('create_customized:obsidian_haunting')
    event.recipes.createHaunting(['minecraft:name_tag'], 'minecraft:writable_book').id('create_customized:soul_nametag')
    // mixing 
    event.recipes.createMixing([
		'minecraft:coarse_dirt'
	], [
		'minecraft:dirt', 'minecraft:gravel'
	]).id('create_customized:coarse_dirt')
    // Be3Al2(SiO3)6
    event.recipes.createMixing([
		'minecraft:emerald'
	], [
		'minecraft:quartz', 
		'minecraft:glass', 
		'3x minecraft:iron_nugget'
	]).superheated().id('create_customized:renew_emerald')
    // Thank you to FunnyMan4579 on the official Create Discord for giving me this idea :3
    event.recipes.createMixing([
		'minecraft:nether_gold_ore'
	], [
		'create:cinder_flour',
		'18x minecraft:gold_nugget',
		Fluid.of('minecraft:lava', 250)
	]).id('create_customized:nether_gold_ore_deco')
})