import mods.createtweaker.CrushingRecipe;
<recipetype:create:crushing>.addRecipe("basalt_copper", [<item:create:copper_nugget>, <item:minecraft:gunpowder> % 10], <item:minecraft:basalt>);
<recipetype:create:crushing>.addRecipe("pointed_dripstone", [<item:minecraft:pointed_dripstone> * 4, <item:create:experience_nugget> % 75], <item:minecraft:dripstone_block>);
// gravel to sand to dirt
recipes.removeByName("create:crushing/gravel");
<recipetype:create:crushing>.addRecipe("gravel_to_dirt", [<item:minecraft:dirt>, <item:minecraft:flint> % 10], <item:minecraft:gravel>, 200);
<recipetype:create:crushing>.addRecipe("dirt_to_sand", [<item:minecraft:sand>, <item:minecraft:clay_ball> % 5], <item:minecraft:dirt>, 200);

// Netherite scrap is now renewable, but there are extra steps.
recipes.removeByName("create:crushing/netherrack");
<recipetype:create:crushing>.addRecipe("netherrack_crushing", [<item:create:cinder_flour>, <item:create:cinder_flour> % 50, <item:minecraft:netherite_scrap> % 0.002], <item:minecraft:netherrack>, 250);

// if you don't want dripstone to give copper, copy this line.
<recipetype:create:crushing>.addRecipe("dripstone_to_pointed", [<item:minecraft:pointed_dripstone> * 4, <item:minecraft:pointed_dripstone> % 50, <item:create:experience_nugget> % 75], <item:minecraft:dripstone_block>, 250);

// if you want dripstone to give copper, copy this line. Suggested by PH0TON-GR4VITY#7922 on Discord
<recipetype:create:crushing>.addRecipe("useful_dripstone", [(<item:minecraft:clay_ball> * 3) % 50, <item:create:copper_nugget> % 30, <item:create:experience_nugget> % 25, <item:minecraft:pointed_dripstone> * 4,], <item:minecraft:dripstone_block>, 250);


// old JSON below

/*<recipetype:create:crushing>.addJsonRecipe("json_pointed_dripstone", {
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:dripstone_block"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "count": 4,
      "item": "minecraft:pointed_dripstone"
    },
    {
      "chance": 0.5,
      "item": "minecraft:pointed_dripstone"
    },
    {
      "chance": 0.75,
      "item": "create:experience_nugget"
    }
  ]
}
);
*/

/*<recipetype:create:crushing>.addJsonRecipe("copper_nugget", {
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:basalt"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "item": "create:copper_nugget"
    },
    {
      "chance": 0.1,
      "item": "minecraft:gunpowder"
    },
  ]
});*/
/*<recipetype:create:crushing>.addJsonRecipe("pointed_dripstone", {
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:dripstone_block"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "count": 4,
      "item": "minecraft:pointed_dripstone"
    },
    {
      "chance": 0.5,
      "item": "minecraft:pointed_dripstone"
    },
    {
      "chance": 0.75,
      "item": "create:experience_nugget"
    }
  ]
});*/
/*<recipetype:create:crushing>.addJsonRecipe("netherrack", {
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:netherrack"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "item": "create:cinder_flour"
    },
    {
      "chance": 0.5,
      "item": "create:cinder_flour"
    },
    {
      "chance": 0.0009765625,
      "item": "minecraft:netherite_scrap"
    },
  ]
}
);
*/