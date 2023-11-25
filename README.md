# <p align="center" dir="auto">𝌤 Create Customized 𝌤</p>
<p align="center" dir="auto"><a href="https://"><img src="https://img.shields.io/badge/Available%20for-1.19.2%E2%94%831.18.2-orange"></a> <a href="https://"><img src="https://img.shields.io/badge/Liscense-MIT-blueviolet"></a></p>

**Hey you! Scroll down!**

> [!NOTE]
> This is a work in progress wiki and will be incomplete in some parts.

Please note that all folders except the `.minecraft` folder contain markdown files that are meant for reading.

# Table of Contents

- Coding 101
- Shaped recipes

<!--

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

[^1]: My reference.
[^2]: To add line breaks within a footnote, prefix new lines with 2 spaces.
  This is a second line.

-->

> [!IMPORTANT]
> This "wiki" is for KubeJS on 1.19.2 only. However, syntax has not changed significantly enough to the point you will have to re-write everything to make your scripts work on 1.20.x but there are still some minor differences.

# Getting Started

Be sure to have these mods already installed beforehand. The text in blue are links that you can click on if you are not already aware of this fact. 

Also, press `F3 + H` to enable advanced tooltips in-game. This allows you to see the recipe ID so you can override them if needed.

| Perquisite Name | Version used |
| --- | --- |
| [KubeJS](https://www.curseforge.com/minecraft/mc-mods/kubejs) | 1902.6.2-build.42 |
| [KubeJS Create](https://www.curseforge.com/minecraft/mc-mods/kubejs-create) | 1902.2.4-build.36 |
| [Rhino](https://www.curseforge.com/minecraft/mc-mods/rhino) | 1902.2.2-build.280 |
| [Architectury](https://www.curseforge.com/minecraft/mc-mods/architectury-api) | v6.5.85 |
| [ProbeJS](https://www.curseforge.com/minecraft/mc-mods/probejs) | 5.3.2 |

> [!TIP]
> Ctrl + S is the universal standard for saving a file. Build it into your muscle memory! Although if you are on macOS, I think it's... CMD + S?

Before we get started, here are some important prequisites before you get started with using KubeJS in your Forge 1.19.2 instance.

* [Visual Studio Code](https://code.visualstudio.com/)

Please ensure that you also have `File name extensions` enabled as Windows hides this by default. This does not seem to be the case when viewing the instance (.minecraft) folder through Visual Studio Code (VSC).

## What is Visual Studio Code?

It is basically a specialized "Notepad" program in simplified terms.

It has the advantage of: 

- Formatting `.json` and `.js` files correctly and uniformly.
- Syntax highlighting
  - What is `syntax highlighting`? It means that it color codes text to help identify what does what.
- Highlights errors in your code with red lines with warnings underlined with yellow
- Opening your Minecraft folder instance for easy access
- Has support for `.toml`, `.ini`, `.cfg`, `.snbt` mod config files with extensions installed.
- Has support for viewing `.nbt` files
  - Requires NBT Viewer by Misode to be installed
- Easy side-by-side access to the entire instance folder  

## Folders and Folder Structure

After these mods and extensions are installed, run the game **once** and make a world to generate the `kubejs` folder which is located in your Minecraft instance folder.

### .minecraft Folders

For context, your Minecraft Instance folder will contain the majority of the following folders:

| Folder Name | Purpose / Contents |
| --- | --- |
| config | Contains common and client side configs. |
| defaultconfig | This folder is usually empty, but is responsible for copying configs contained within it to both the instance's config folder and the world's serverconfig |
| kubejs | Where the KubeJS magic happens. |
| mods | Self-explanatory. **Contains your mods.** |
| saves | Contains your world saves. |
| screenshots | Contains your screenshots. |
| schematics | Contains all of your Create schematics in the form of `.nbt` files. |

If you see most of these folders without opening any of them, you are in the right place.

### KubeJS Folders

> [!WARNING]
> Where you put your `.js` files does matter! DO NOT expect a script that changes recipes to work in the startup_folder as it will crash the game.

Inside the KubeJS folder, it contains the following folders and a `README.txt` file.

- `assets`
  - Here is where you put your custom item, armor, block and fluid textures.
    - Yes, you can use `.json` files for custom block models.
    - Yes, you can use `.mcmeta` files to change how your block is displayed in-game and make another color variant for deepslate for example.
- `client_scripts`
  - This is where your scripts related to tooltips, JEI modification and other client side things will go.
- `config`
  - This is where you can put `defaultoptions.txt` so you don't have to use DefaultOptions.
  - Setting the Window Title. That's the client name that shows up in the window on the top left corner if you don't know what that means.
  - Setting the client icon. Must be an `.png` file exported in 32-bit, otherwise it will cause a JVM crash.
- `data`
  - Put the `data` folder contents of your datapacks in here. It will not work if you have it like `kubejs\data\bigcustomdatapack\` unless if it is zipped.
- `exported`
  - You don't really need to worry about it. It's just where data dumps like texture atlases are well... dumped.
- `server_scripts`
  - This is where the recipe magic happens! Remember to `Ctrl + S` to save your recipe once it is finished then type /reload.
  - You can also modify item tags, loot tables, and more in here.
- `startup_scripts`
  - Scripts for your custom items, blocks, armor and fluids go in here. This includes custom sequenced assembly transitional items and sandpaper if KubeJS Create is present.
  - This is where you can modify item and armor durability.

# GitHub Repository Navigation

Take the time to familiarize yourself with GitHub's interface as this is how you are going to be navigating this particular wiki.

- Markdown files are basically the pages / documents.
- When you open a folder, there's going to be a side panel on the left-hand side of your screen that behaves like the File Explorer folder tree view. Each folder can be of course minimized for easier viewing of other folder structures.
- Branches are for separating Minecraft versions and script type.