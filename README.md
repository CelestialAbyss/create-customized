# <p align="center" dir="auto">𝌤 Create Customized 𝌤</p>
<p align="center" dir="auto"><a href="https://"><img src="https://img.shields.io/badge/Available%20for-1.19.2%E2%94%831.18.2-orange"></a> <a href="https://"><img src="https://img.shields.io/badge/Liscense-MIT-blueviolet"></a></p>

Code for modifying vanilla Create recipes and material utilization.

Hi there! This is the CraftTweaker branch which uses ZenScript.
My custom recipes can be found in the `scripts` folder, simply download the file after navigating through the folders or Ctrl + C the text. You can also clone the entire repository to your computer with GitHub Desktop and drag and drop the scripts folder into your Forge mod loader instance. These scripts will not work on Fabric. Just be aware you need to install the following mods:

* [CraftTweaker by Jaredlll08](https://www.curseforge.com/minecraft/mc-mods/crafttweaker)
* [CreateTweaker by Jaredlll08](https://curseforge.com/minecraft/mc-mods/createtweaker)

I am by no means an expert, but I think I've made enough recipes to no longer be considered a beginner. 

Speaking of beginners, I highly recommend CraftTweaker as it has made implementing custom recipes, durability and other things much easier! You may use my work as a point of reference along with CraftTweaker's documentation to help you get started if you want to make your own modpack, either to enjoy with friends privately or publish publicly once you learn the strings.

### <p align="center" dir="auto">§</p>

## Will you backport your scripts to 1.16.5 or older?

***NO.*** It is time to move on from those versions as they are End of Life.

## How do I use your scripts with Create?

1. First ensure you are on either Forge 1.18.2 or 1.19.2 and install [CraftTweaker](https://www.curseforge.com/minecraft/mc-mods/crafttweaker) and [CreateTweaker](https://curseforge.com/minecraft/mc-mods/createtweaker).

2. Then in your minecraft nstance folder (the folder that has `config`, `mods`, etc.), create a `scripts` folder. The folder path should look something like this: yourInstanceFolderName/scripts

3. Then just download the .zs files from here into the scripts folder. You can also make a .txt file and change the .txt file extension to .zs then copy and paste the scripts through Notepad.

## What is CraftTweaker? Why use it? Couldn't you just try and learn JavaScript?
Basically, CraftTweaker is like a... "game engine" (in laymans terms) that you can use to make scripts which are equivalent to datapacks which use JSON syntax instead. However, unlike datapacks, CraftTweaker offers more customizability and is more robust. KubeJS also does the same thing with some really cool extras and uses Mozilla's Rhino "game engine" and utilizes the JavaScript coding language instead.

Edit: The crossed out statement no longer applies as I have learned KubeJS Legacy syntax while developing my modpack in 1.18.2.
~~I could try and learn JavaScript, but it's not really clicking with me as well as ZenScript. Also, CraftTweaker is actually older than KubeJS. I'm not trying to say that it is better, but KubeJS does have some bugs that I have encountered while writing recipes or tooltips.~~

Here's a quote from the Create GitHub wiki as to why CraftTweaker should be used pver datapacks:

*CraftTweaker (optional): CraftTweaker can help you get all currently active recipes and see the tags an item is part of. This makes CraftTweaker an excellent mod to debug your recipes in-game. But, most importantly, CraftTweaker allows for a clean removal of recipes. If you add a new recipe, you will often want the old recipe gone. If this recipe is added by the mod natively (in the .JAR), CraftTweaker is the best option to disable it.*

And here's a quote directly from the front page of Open Loader: https://www.curseforge.com/minecraft/mc-mods/open-loader

***How does pack load order work?***

*Any resource packs loaded by OpenLoader should be loaded after vanilla and modded resource packs. Data pack load orders are done on a per-world basis instead and can be very annoying. Initially all data packs loaded by this mod will be loaded after vanilla and modded packs. Any mods added to the game after that initial world load will load after all previously loaded packs but only for that world. This can be fixed by using Vanilla's data pack command to correct the world order on a per-world basis. If you need more consistent control over load order I would recommend a scripting tool like CraftTweaker which is more robust and stable than the data pack system.*

So if both developers recommended it, I thought "I should probably use this and transition away from JSON considering how much space it takes up visually but still use it in certain cases."
