# <p align="center" dir="auto">𝌤 Create Customized 𝌤</p>
<p align="center" dir="auto"><a href="https://"><img src="https://img.shields.io/badge/Available_for-1.18.2%2C_1.19.2-2ea44f" alt="Available for - 1.18.2, 1.19.2"></a> <a href="https://"><img src="https://img.shields.io/badge/Liscense-MIT-blueviolet" alt="Liscense - MIT"></a></p>

Code for modifying vanilla Create recipes and material utilization.

## Will you backport your scripts to 1.16.5 or older?

***NO.*** It is time to move on from those versions as they are End of Life.

## How do I use your scripts with Create?

First ensure you are on either Forge 1.18.2 or 1.19.2 and install CraftTweaker and CreateTweaker.

Then in your Instance folder, create a scripts folder.

The folder path should look something like this: yourInstanceFolderName/scripts

Then just download the .zs files from here into the scripts folder. You can also make a .txt file and change the .txt file extension to .zs then copy and paste the scripts through Notepad.

## What is CraftTweaker? Why use it?

Here's a quote from the Create GitHub wiki as to why I use ZenScript:

*CraftTweaker (optional): CraftTweaker can help you get all currently active recipes and see the tags an item is part of. This makes CraftTweaker an excellent mod to debug your recipes in-game. But, most importantly, CraftTweaker allows for a clean removal of recipes. If you add a new recipe, you will often want the old recipe gone. If this recipe is added by the mod natively (in the .JAR), CraftTweaker is the best option to disable it.*

And here's a quote directly from the front page of Open Loader: https://www.curseforge.com/minecraft/mc-mods/open-loader

***How does pack load order work?***

*Any resource packs loaded by OpenLoader should be loaded after vanilla and modded resource packs. Data pack load orders are done on a per-world basis instead and can be very annoying. Initially all data packs loaded by this mod will be loaded after vanilla and modded packs. Any mods added to the game after that initial world load will load after all previously loaded packs but only for that world. This can be fixed by using Vanilla's data pack command to correct the world order on a per-world basis. If you need more consistent control over load order I would recommend a scripting tool like CraftTweaker which is more robust and stable than the data pack system.*

So if both developers recommended it, I thought "I should probably use this and transition away from JSON considering how much space it takes up visually..."
