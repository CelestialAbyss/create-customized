recipes.removeByName("farmersdelight:skillet");
craftingTable.addShaped("cooking_skillet", <item:farmersdelight:skillet>, [
   [<item:minecraft:air>, <item:create:iron_sheet>, <item:create:iron_sheet>],
   [<item:minecraft:air>, <item:create:iron_sheet>, <item:create:iron_sheet>],
   [<item:minecraft:brick>, <item:minecraft:air>, <item:minecraft:air>]
]);
recipes.removeByName("farmersdelight:cooking_pot");
craftingTable.addShaped("cooking_pot", <item:farmersdelight:cooking_pot>, [
   [<item:minecraft:brick>, <item:minecraft:wooden_shovel>, <item:minecraft:brick>],
   [<item:create:iron_sheet>, <item:minecraft:water_bucket>, <item:create:iron_sheet>],
   [<item:create:iron_sheet>, <item:create:iron_sheet>, <item:create:iron_sheet>]
]);
recipes.removeByName("farmersdelight:cutting_board");
<recipetype:create:cutting>.addRecipe("oak_cutting_board", <item:farmersdelight:cutting_board>, <item:minecraft:oak_slab>, 100);
<recipetype:create:cutting>.addRecipe("spruce_cutting_board", <item:farmersdelight:cutting_board>, <item:minecraft:spruce_slab>, 100);
<recipetype:create:cutting>.addRecipe("birch_cutting_board", <item:farmersdelight:cutting_board>, <item:minecraft:birch_slab>, 100);
<recipetype:create:cutting>.addRecipe("jungle_cutting_board", <item:farmersdelight:cutting_board>, <item:minecraft:jungle_slab>, 100);
<recipetype:create:cutting>.addRecipe("acacia_cutting_board", <item:farmersdelight:cutting_board>, <item:minecraft:acacia_slab>, 100);
<recipetype:create:cutting>.addRecipe("dark_oak_cutting_board", <item:farmersdelight:cutting_board>, <item:minecraft:dark_oak_slab>, 100);
<recipetype:create:cutting>.addRecipe("crimson_cutting_board", <item:farmersdelight:cutting_board>, <item:minecraft:crimson_slab>, 100);
<recipetype:create:cutting>.addRecipe("warped_cutting_board", <item:farmersdelight:cutting_board>, <item:minecraft:warped_slab>, 100);

/* Still figuring out how to set an ingredient array in ZenScript... tagged items don't work.
import mods.create.CuttingManager;
var arr = ["oak", "spruce", "birch", "jungle", "acacia", "darkoak", "crimson", "warped"];
array[]
array[]*/
