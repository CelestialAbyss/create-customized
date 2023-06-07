// Infinity Wand recipe
recipes.removeByName("constructionwand:infinity_wand");
recipes.removeByName("constructionwand:diamond_wand");
recipes.removeByName("constructionwand:iron_wand");
mods.extendedcrafting.TableCrafting.addShaped("basic_infinity_wand", 0, <item:constructionwand:infinity_wand>, [
    [<item:minecraft:air>,<item:minecraft:air>,<item:extendedcrafting:ender_star>],
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>],
    [<item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:air>]
]);
mods.extendedcrafting.TableCrafting.addShaped("basic_diamond_wand", <item:constructionwand:diamond_wand>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:extendedcrafting:elite_catalyst>],
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>],
    [<item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:air>]
]);
mods.extendedcrafting.TableCrafting.addShaped("basic_iron_wand", <item:constructionwand:iron_wand>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:extendedcrafting:basic_catalyst>],
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>],
    [<item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:air>]
]);
/*craftingTable.addShaped("cre_infinity_wand", <item:constructionwand:infinity_wand>, [
    [<item:minecraft:air>,<item:minecraft:air>,<item:extendedcrafting:ender_star>],
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>],
    [<item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:air>]
]);*/