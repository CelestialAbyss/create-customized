// include me if you want to integrate Create with vanilla Minecraft!
recipes.removeByName("minecraft:bucket");
craftingTable.addShaped("bucket", <item:minecraft:bucket>, [
    [<item:create:iron_sheet>, <item:minecraft:air>, <item:create:iron_sheet>],
    [<item:minecraft:air>, <item:create:iron_sheet>, <item:minecraft:air>]
]);
recipes.removeByName("minecraft:clock");
craftingTable.addShaped("mechanical_clock", <item:minecraft:clock>, [
    [<item:minecraft:air>, <item:create:golden_sheet>, <item:minecraft:air>],
    [<item:create:golden_sheet>, <item:create:precision_mechanism>, <item:create:golden_sheet>],
    [<item:minecraft:air>, <item:create:golden_sheet>, <item:minecraft:air>]
]);
recipes.removeByName("minecraft:compass");
craftingTable.addShaped("real_compass", <item:minecraft:compass>, [
    [<item:minecraft:air>, <item:create:iron_sheet>, <item:minecraft:air>],
    [<item:create:iron_sheet>, <item:minecraft:redstone>, <item:create:iron_sheet>],
    [<item:minecraft:air>, <item:create:iron_sheet>, <item:minecraft:air>]
]);
recipes.removeByName("minecraft:hopper");
craftingTable.addShaped("minecraft_hopper", <item:minecraft:hopper>, [
    [<item:create:iron_sheet>, <item:minecraft:air>, <item:create:iron_sheet>], 
    [<item:create:iron_sheet>, <tag:items:forge:chests/wooden>, <item:create:iron_sheet>],
    [<item:minecraft:air>, <item:create:iron_sheet>, <item:minecraft:air>]
]);