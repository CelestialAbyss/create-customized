// Dark Matter (ingredient)
recipes.removeByName("projecte:dark_matter");
mods.extendedcrafting.TableCrafting.addShaped("basic_dm", 0, <item:projecte:dark_matter>, [
	[<item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>], 
	[<item:projecte:aeternalis_fuel>, <item:extendedcrafting:elite_catalyst>, <item:projecte:aeternalis_fuel>], 
	[<item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>]
]);
// Red Matter (ingredient)
recipes.removeByName("projecte:red_matter");
recipes.removeByName("projecte:red_matter_alt");
mods.extendedcrafting.TableCrafting.addShaped("basic_rm", 0, <item:projecte:red_matter>, [
    [<item:projecte:aeternalis_fuel>,<item:projecte:dark_matter>,<item:projecte:aeternalis_fuel>],
    [<item:projecte:dark_matter>,<item:extendedcrafting:ultimate_catalyst>,<item:projecte:dark_matter>],
    [<item:projecte:aeternalis_fuel>,<item:projecte:dark_matter>,<item:projecte:aeternalis_fuel>]
]);
// philosophers stone
recipes.remove(<item:projecte:philosophers_stone>);
mods.extendedcrafting.TableCrafting.addShaped("philosophers_stone", 0, <item:projecte:philosophers_stone>, [
	[<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone"}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:redstone"}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone"})], 
	[<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:redstone"}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:diamond"}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:redstone"})], 
	[<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone"}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:redstone"}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone"})]
]);
mods.extendedcrafting.TableCrafting.addShaped("philosophers_stone_alt", 0, <item:projecte:philosophers_stone>, [
	[<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:redstone"}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone"}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:redstone"})], 
	[<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone"}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:diamond"}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone"})], 
	[<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:redstone"}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone"}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:redstone"})]
]);
recipes.remove(<item:projecte:transmutation_table>);
mods.extendedcrafting.TableCrafting.addShaped("transmutation_table", 0, <item:projecte:transmutation_table>, [
	[<item:projecte:dark_matter_block>, <item:extendedcrafting:elite_catalyst>, <item:projecte:dark_matter_block>], 
	[<item:extendedcrafting:elite_catalyst>, <item:projecte:philosophers_stone>, <item:extendedcrafting:elite_catalyst>], 
	[<item:projecte:dark_matter_block>, <item:extendedcrafting:elite_catalyst>, <item:projecte:dark_matter_block>]
]);
recipes.remove(<item:projecte:transmutation_tablet>);
mods.extendedcrafting.TableCrafting.addShaped("transmutation_tablet", 0, <item:projecte:transmutation_tablet>, [
	[<item:projecte:red_matter_block>, <item:extendedcrafting:ultimate_catalyst>, <item:projecte:red_matter_block>], 
	[<item:extendedcrafting:ultimate_catalyst>, <item:projecte:transmutation_table>, <item:extendedcrafting:ultimate_catalyst>], 
	[<item:projecte:red_matter_block>, <item:extendedcrafting:ultimate_catalyst>, <item:projecte:red_matter_block>]
]);

recipes.remove(<item:projecte:watch_of_flowing_time>);

mods.extendedcrafting.TableCrafting.addShaped("watch_of_flowing_time_ext", 0, <item:projecte:watch_of_flowing_time>, [
    [<item:projecte:dark_matter>, <item:minecraft:glowstone>, <item:projecte:dark_matter>],
    [<item:extendedcrafting:enhanced_ender_component>, <item:minecraft:clock>, <item:extendedcrafting:enhanced_ender_component>],
    [<item:projecte:dark_matter>, <item:minecraft:glowstone>, <item:projecte:dark_matter>],
]);

// old recipes
/*craftingTable.addShaped("crafting_dm", <item:projecte:dark_matter>, [
    [<item:projecte:aeternalis_fuel>,<item:projecte:aeternalis_fuel>,<item:projecte:aeternalis_fuel>],
    [<item:projecte:aeternalis_fuel>, <item:extendedcrafting:elite_catalyst>, <item:projecte:aeternalis_fuel>],
    [<item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>]
]);*/
/*craftingTable.addShaped("crafting_rm", <item:projecte:red_matter>, [
    [<item:projecte:aeternalis_fuel>,<item:projecte:dark_matter>,<item:projecte:aeternalis_fuel>],
    [<item:projecte:dark_matter>,<item:extendedcrafting:ultimate_catalyst>,<item:projecte:dark_matter>],
    [<item:projecte:aeternalis_fuel>,<item:projecte:dark_matter>,<item:projecte:aeternalis_fuel>]
]);*/
/*craftingTable.addShaped("watch_of_flowing_time", <item:projecte:watch_of_flowing_time>, [
    [<item:projecte:dark_matter>, <item:minecraft:glowstone>, <item:projecte:dark_matter>],
    [<item:extendedcrafting:enhanced_ender_component>, <item:minecraft:clock>, <item:extendedcrafting:enhanced_ender_component>],
    [<item:projecte:dark_matter>, <item:minecraft:glowstone>, <item:projecte:dark_matter>],
]);*/