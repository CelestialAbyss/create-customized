// I have provided some code that I use from my own modpacks, as an example.

JEIEvents.hideItems(event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	MYSHIDE.forEach(name => {
		event.hide(`mysticalagriculture:${name}_essence`)
	})
	event.hide('createaddition:straw')
	event.hide('createaddition:bioethanol_bucket')
	event.hide('createaddition:bioethanol')
	event.hide('createaddition:straw')
	event.hide('createaddition:gold_rod')
	event.hide('createaddition:brass_rod')
})
JEIEvents.information(event => {
	event.addItem('tempad:tempad', [
        'Allows you to teleport to points you placed throughout the world but has a 3 minute cooldown.'
    ])
	event.addItem('tempad:he_who_remains_tempad', [
        'Can only be acquired from the End, somewhere.'
    ])
	event.addItem('mysticalagriculture:fertilized_essence', [
        'Can only be acquired from Mystical Agriculture crops upon harvesting.', 
        'Not a guaranteed drop!'
    ])
	event.addItem('cataclysm:burning_ashes', [
        'Used to summon Ignis.'
    ])
	event.addItem('minecraft:nether_star', [
        'If you find a deactivated and mechanical version of the Wither, give it a Nether Star.', 
        'Also extensively used in certain recipes.'
    ])
	event.addItem('cataclysm:abyssal_sacrifice', [
        'Required to summon the Leviathan.', 
        'Use on the Altar of Abyss located in the Sunken City.'
    ])
	event.addItem('minecraft:ender_eye', [
        'There is a certain eye that can only be acquired from enchanting.', 
        'It is very rare, however.'
    ])
	event.addItem('endrem:black_eye', [
        'Can be found in lost treasure chests.'
    ])
	event.addItem('endrem:cold_eye', [
        'Found in igloos.'
    ])
	event.addItem('endrem:corrupted_eye', [
        'Found in Pillager Outposts.'
    ])
	event.addItem('endrem:lost_eye', [
        'Usually found in Mineshafts.'
    ])
	event.addItem('endrem:nether_eye', [
        'Found in Nether Fortresses.'
    ])
	event.addItem('endrem:old_eye', [
        'Found in Desert Pyramids.'
    ])
	event.addItem('endrem:rogue_eye', [
        'Usually found in Jungle Temples.'
    ])
	event.addItem('endrem:cursed_eye', [
        'Usually found in Bastions.'
    ])
	event.addItem('endrem:evil_eye', [
        'Usually acquired from a Master Cleric.'
    ])
	event.addItem('endrem:guardian_eye', [
        'Usually acquired from slaying Elder Guardians.'
    ])
	event.addItem('endrem:magical_eye', [
        'Acquired from slaying Evokers.'
    ])
	event.addItem('endrem:wither_eye', [
        'Obviously only drops from the Wither.'
    ])
	event.addItem('endrem:witch_eye', [
        'Requires a Witch Pupil to craft.'
    ])
	event.addItem('endrem:undead_eye', [
        'Requires a skeleton horse to be slain in order to acquire the Undead Soul.'
    ])
	event.addItem('endrem:undead_soul', [
        'Acquired from slaying a skeleton horse.'
    ])
	event.addItem('endrem:exotic_eye', [
        'Created by combining multiple exotic ingredients using a Crafting Core.'
    ])
})
ItemEvents.tooltip(event => {
    event.addAdvanced('cataclysm:infernal_forge', (item, advanced, text) => {
        text.set(1, Text.of('§6Right click on a block to cause AoE damage around yourself, it sends mobs flying.')) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
        text.set(2, Text.of('§6Also important to note, this is actually a pickaxe.'))
        text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:monstrous_helm', (item, advanced, text) => {
        text.add(1, Text.of('§6Falling below half of your HP will push away entities and grant buffs.'))
        text.add(2, Text.of('§6You are given additional Defense, Knockback Resistance and Regeneration.'))
        text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:the_incinerator', (item, advanced, text) => {
        text.add(1, Text.of('§6Hold right click for 3 seconds until you hear a sound.'))
        text.add(2, Text.of('§6After hearing the roar of the flames, let go to unleash devastation in a straight line.'))
        text.add(3, Text.of('§6WARNING: Dropped items in the line of fire will be destroyed!'))
        text.add(4, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:bulwark_of_the_flame', (item, advanced, text) => {
        text.add(1, Text.of('§6Functions regularly like a shield, but with a charge ability.'))
        text.add(2, Text.of('§6While sneaking and blocking, let go of the right mouse button to charge forward.'))
        text.add(3, Text.of('§6Entities that collide with a wall are stunned from the impact and take additional damage.'))
        text.add(4, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:void_scatter_arrow', (item, advanced, text) => {
        text.add(1, Text.of('§6This arrow explodes on impact, creating many fragments in the process.'))
    })
    event.addAdvanced('cataclysm:void_core', (item, advanced, text) => {
        text.add(1, Text.of('§6Right click on the ground to cause Void Rune spikes to erupt in a straight line in front of you.'))
        text.add(2, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:gauntlet_of_guard', (item, advanced, text) => {
        text.add(1, Text.of('§6When held in your main hand, you can pull entities towards you by holding right click.'))
        text.add(2, Text.of('§6Be sure to give them a golden punch afterwards!'))
        text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    // Ignitium Armor corrections
    event.addAdvanced('cataclysm:ignitium_helmet', (item, advanced, text) => {
        text.add(1, Text.of('§6Provides Lava Vision.'))
        text.add(2, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:ignitium_chestplate', (item, advanced, text) => {
        text.add(1, Text.of('§6You can combine an Elytra with this in the Smithing Table.'))
        text.add(2, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:ignitium_leggings', (item, advanced, text) => {
        text.add(1, Text.of('§6The developer, L_Ender says "Flame Reflex" ...but the item fails to give any form of Fire Resistance.'))
        text.add(2, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:ignitium_boots', (item, advanced, text) => {
        text.add(1, Text.of('§6Lava Walker, allows you to walk on lava.'))
        text.add(2, Text.of("§6DOES NOT provide Fire Resistance, even with the full set!"))
        text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    // cataclysm 1192 items
    event.addAdvanced('cataclysm:wither_assault_shoulder_weapon', (item, advanced, text) => {
        text.add(1, Text.of('§6Hold and release right click to fire a Wither Missile that travels in a straight line and explodes'))
        text.add(2, Text.of('§6Hold Shift to use the alt fire which fires a Wither Howitzer projectile that follows an arced path.'))
        text.add(3, Text.of('§6Upon contact, the Howitzer projectile leaves a lingering smoke that applies the Wither effect.'))
        text.add(4, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:void_forge', (item, advanced, text) => {
        text.add(1, Text.of('§6Now creates a fan of void spikes when you right click a block, in addition to sending mobs flying.'))
        text.add(2, Text.of('§6Yes, this is still a pickaxe.'))
        text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:gauntlet_of_bulwark', (item, advanced, text) => {
        text.add(1, Text.of('§6Hold right click to push nearby entities and give them the Blazing Brand debuff.'))
        text.add(2, Text.of('§6Releasing right click will make you charge forward and apply damage to the entities hit by you.'))
        text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:void_assault_shoulder_weapon', (item, advanced, text) => {
        text.add(1, Text.of('§6The upgraded version of the Wither Assault Shoulder Weapon.'))
        text.add(2, Text.of('§6You can now shoot Void Howitzer projectiles which now create a tsunami of void spikes on impact.'))
        text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
})