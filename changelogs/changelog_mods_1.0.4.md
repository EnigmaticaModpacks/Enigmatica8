# Enigmatica8 1.0.3⟶Enigmatica8 1.0.4

## Added

* [Emojiful](https://www.curseforge.com/minecraft/mc-mods/emojiful)
* [FlickerFix](https://www.curseforge.com/minecraft/mc-mods/flickerfix)
* [Guns Without Roses](https://www.curseforge.com/minecraft/mc-mods/guns-without-roses)
* [Iron Chests](https://www.curseforge.com/minecraft/mc-mods/iron-chests)
* [Lava Clear View (Forge)](https://www.curseforge.com/minecraft/mc-mods/lava-clear-view)
* [Meet Your Fight](https://www.curseforge.com/minecraft/mc-mods/meet-your-fight)
* [More Dragon Eggs](https://www.curseforge.com/minecraft/mc-mods/more-dragon-eggs)
* [Passthrough Signs](https://www.curseforge.com/minecraft/mc-mods/passthrough-signs)
* [Save Your Pets](https://www.curseforge.com/minecraft/mc-mods/save-your-pets)
* [The One Probe](https://www.curseforge.com/minecraft/mc-mods/the-one-probe)
* [Trofers](https://www.curseforge.com/minecraft/mc-mods/trofers)

## Updated

### [Applied Energistics 2](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2) ([10.0.0-beta.3 [FORGE]](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/files/3590239)⟶[10.0.0-beta.4 [FORGE]](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/files/3599934))

#### [10.0.0-beta.4 [FORGE]](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/files/3599934)

What's Changed

* Internal overhaul of recipe transfer. It should now work for all relevant recipe types and correctly import amounts for items/fluids. It also uses better prioritization when encoding items into patterns.
* NOTE: Recipe transfer refers to pressing the "+" button in a JEI or REI recipe while an AE screen is open
* Recipe transfer will now use Vanilla ingredient rules when being used in a crafting terminal (this should now work a lot better with damaged items or items with NBT)
* The pattern encoder will now switch modes automatically based on the recipe being transfered (crafting table recipes -> crafting mode, everything else -> processing mode)
* For processing patterns, recipe transfer will now group together multiple copies of the same ingredient and sum their amounts
* When a processing pattern has multiple outputs there is no a button to cycle the primary output between the encoded outputs to better support transfering processing recipes from JEI, where it is unknown which output is the primary.

Fixes

* Fix middle mouse button not opening the "set amount" screen in the pattern encoder in survival mode (#5968)
* Fix unpowered drives/chests not showing the black cell LEDs (#5949)
* Fix network tool not saving its contents when existing items were being split/stacked in the UI (#5955)
* Fix that storage bus/formation plane would not show the contents of the config slots below the second row when being opened for the first time after being loaded (#5969)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/files/all)

### [Biomes O' Plenty](https://www.curseforge.com/minecraft/mc-mods/biomes-o-plenty) ([Biomes O' Plenty 1.18.1-15.0.0.91](https://www.curseforge.com/minecraft/mc-mods/biomes-o-plenty/files/3598771)⟶[Biomes O' Plenty 1.18.1-15.0.0.94](https://www.curseforge.com/minecraft/mc-mods/biomes-o-plenty/files/3599398))

#### [Biomes O' Plenty 1.18.1-15.0.0.94](https://www.curseforge.com/minecraft/mc-mods/biomes-o-plenty/files/3599398)

forstride:

* One final block.properties tweak for shader support

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/biomes-o-plenty/files/all)

### [Chisels & Bits - For Forge](https://www.curseforge.com/minecraft/mc-mods/chisels-bits) ([ChiselsBits-forge-1.18.1-1.2.68-universal.jar](https://www.curseforge.com/minecraft/mc-mods/chisels-bits/files/3597499)⟶[ChiselsBits-forge-1.18.1-1.2.70-universal.jar](https://www.curseforge.com/minecraft/mc-mods/chisels-bits/files/3599444))

#### [ChiselsBits-forge-1.18.1-1.2.70-universal.jar](https://www.curseforge.com/minecraft/mc-mods/chisels-bits/files/3599444)

Chisels & Bits Changelog

Version: 1.2.70

Changes:

* Fix the bitwidth of state setter.

### [JourneyMap](https://www.curseforge.com/minecraft/mc-mods/journeymap) ([journeymap-1.18.1-5.8.0beta6](https://www.curseforge.com/minecraft/mc-mods/journeymap/files/3596395)⟶[journeymap-1.18.1-5.8.0beta7](https://www.curseforge.com/minecraft/mc-mods/journeymap/files/3599162))

#### [journeymap-1.18.1-5.8.0beta7](https://www.curseforge.com/minecraft/mc-mods/journeymap/files/3599162)

JourneyMap 1.18.1-5.8.0beta7 for Minecraft 1.18.1

Requirements:

* Java 17
* Minecraft 1.18.1
* Forge 1.18.1-39.0.6

General Information:

* See [http://journeymap.info/](http://journeymap.info/) for information about how to install and use this mod, rules about inclusion in modpacks, translation, etc.
* See [http://journeymap.info/Support](http://journeymap.info/Support) for information on getting technical support.
* Implements [JourneyMap API v1.18.1-1.8-SNAPSHOT](https://github.com/TeamJM/journeymap-api)

CHANGELOG (2022-01-08-18:52:09):

New in 1.18.1-5.8.0beta7

* Added: Api labels can also be i18n keys.
* Fixed: Dropdown loading for addons.
* Fixed: Too much metadata saved for addon properties.
* Fixed: Minimap position option window sizing.

Alpha 1-9 & Beta 1-6

* IMPORTANT: Minimum forge version 38.0.17 required for log4j security issues.
* Added: Hooks for API addons to add items to the Options screen.
* Added: Hooks for API to add buttons and toolbars to fullscreen map.
* Added: Right Click menu on fullscreen map with full API(1.8) support!
* Added: New Biome Map Type
* Added: Position Button in Minimap Bottom Bar for minimap and effects moving.
* Added: Cartography option to map water colors based on biome. Default: False
* Added: Version packet for use by bukkit/spigot/sponge servers. See our discord for details.
* Added: Info Slot Background opacity option.
* Added: New Api events for fullscreen mouse_click, mouse_drag, and mouse_move.
* Updated: Journeymap API 1.8 Snapshot
* Updated: Polygon triangulation logic, MUCH better now, holes work! Thanks to Mirality(uecasm)
* Updated: Works on 1.18
* Updated: Updated to latest forge RB
* Fixed: Fullscreen waypoint selection for negative Y values.
* Fixed: Minimap polygon overlay issues.
* Fixed: Cave lighting for caves below y0.
* Fixed: Cave slider click issues.
* Fixed: Cave Slider tooltip for negative slices
* Fixed: Jetty META-INF maven trash removed to avoid module conflicts with dynmap.
* Fixed: Editing Waypoints in multiplayer.
* Fixed: Polygon line drawing
* Fixed: Mod Compat -> OptiFine blurry textures and text.
* Fixed: Empty scaled entity texture
* Fixed: Waypoint negative Y level.
* Fixed: Deathpoint negative Y level.
* Fixed: More dimension naming issues.
* Fixed: Fixed some issues with waypoint label rendering.
* Fixed: Dropdown Translations.
* Fixed: Cave Map disabling issues
* Fixed: Api stroke rendering
* Fixed: Beacon rendering when create and optifine are installed
* Fixed: Effect rendering when optifine is installed.
* Fixed: Most mod interactions with effect icon moving.

[(13 more lines)](https://www.curseforge.com/minecraft/mc-mods/journeymap/files/3599162)

### [Just Enough Items (JEI)](https://www.curseforge.com/minecraft/mc-mods/jei) ([jei-1.18.1-9.1.2.61.jar](https://www.curseforge.com/minecraft/mc-mods/jei/files/3596020)⟶[jei-1.18.1-9.2.1.69.jar](https://www.curseforge.com/minecraft/mc-mods/jei/files/3599262))

#### [Just Enough Items (JEI) 9.2.1](https://www.curseforge.com/minecraft/mc-mods/jei/files/3599262)

* [Give plugins priority over slots for ingredient-under-mouse lookups](https://github.com/mezz/JustEnoughItems/commit/1e16ad51e20139194ee1673118106d6024a0713b) - mezz
* This allows plugins to override the default vanilla slot behavior for the purposes of JEI lookups.

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/jei/files/all)

### [Occultism](https://www.curseforge.com/minecraft/mc-mods/occultism) ([occultism-1.18.1-1.25.0.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3597126)⟶[occultism-1.18.1-1.25.1.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3599834))

#### [occultism-1.18.1-1.25.1.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3599834)

[Automated Build]

1.25.1

Changelog for this build: [https://github.com/klikli-dev/occultism/releases/tag/release/v1.18.1-1.25.1](https://github.com/klikli-dev/occultism/releases/tag/release/v1.18.1-1.25.1)

Find changes for all versions at [https://github.com/klikli-dev/occultism/releases](https://github.com/klikli-dev/occultism/releases)

### [RFTools Utility](https://www.curseforge.com/minecraft/mc-mods/rftools-utility) ([RFToolsUtility - 1.18-4.0.3](https://www.curseforge.com/minecraft/mc-mods/rftools-utility/files/3598151)⟶[RFToolsUtility - 1.18-4.0.4](https://www.curseforge.com/minecraft/mc-mods/rftools-utility/files/3599783))

#### [RFToolsUtility - 1.18-4.0.4](https://www.curseforge.com/minecraft/mc-mods/rftools-utility/files/3599783)

RFToolsUtility 1.18-4.0.4

### [Super Circuit Maker](https://www.curseforge.com/minecraft/mc-mods/super-circuit-maker) ([Super Circuit Maker 2 - Beta 0.1.0 (1.18.1)](https://www.curseforge.com/minecraft/mc-mods/super-circuit-maker/files/3581169)⟶[Super Circuit Maker 2 - Beta 0.1.1 (1.18.1)](https://www.curseforge.com/minecraft/mc-mods/super-circuit-maker/files/3599322))

#### [Super Circuit Maker 2 - Beta 0.1.1 (1.18.1)](https://www.curseforge.com/minecraft/mc-mods/super-circuit-maker/files/3599322)

* Make circuits easier to break
* Fix vertical wires not dropping any items
* Fix lag when looking at complex circuits
* Fix component placement bugs and improve logic

### [TerraBlender (Forge)](https://www.curseforge.com/minecraft/mc-mods/terrablender) ([TerraBlender 1.18.1-1.0.0.24](https://www.curseforge.com/minecraft/mc-mods/terrablender/files/3598130)⟶[TerraBlender Forge 1.18.1-1.1.0.26](https://www.curseforge.com/minecraft/mc-mods/terrablender/files/3599776))

#### [TerraBlender Forge 1.18.1-1.1.0.26](https://www.curseforge.com/minecraft/mc-mods/terrablender/files/3599776)

Build: 1.18.1-1.1.0.26 - Sun Jan 09 14:38:23 GMT 2022

adubbz:

Upload to a separate project for the Fabric version

=========

Build: 1.18.1-1.1.0.25 - Sun Jan 09 13:55:33 GMT 2022

adubbz:

Added Fabric support

=========

Build: 1.18.1-1.0.0.24 - Sat Jan 08 07:46:55 GMT 2022

adubbz:

Optimized NoiseChunk creation, disabled experimental settings nagging

=========

Build: 1.18.1-1.0.0.23 - Sat Jan 08 03:25:14 GMT 2022

adubbz:

Substantially simplified TBNoiseBasedChunkGenerator

=========

Build: 1.18.1-1.0.0.22 - Thu Jan 06 23:18:01 GMT 2022

adubbz:

Fixed surface rules application in the Nether

=========

Build: 1.18.1-1.0.0.21 - Thu Jan 06 22:04:31 GMT 2022

adubbz:

Added API documentation

=========

Build: 1.18.1-1.0.0.20 - Thu Jan 06 05:03:39 GMT 2022

adubbz:

Fixed crashing when creating worlds with/without datapacks in succession

=========

Build: 1.18.1-1.0.0.19 - Thu Jan 06 04:12:59 GMT 2022

adubbz:

Optimized biome tree searching, added a command for checking biome parameters

adubbz:

Datapack fixes

=========

Build: 1.18.1-1.0.0.18 - Wed Jan 05 17:28:57 GMT 2022

adubbz:

Fixed structure generation

adubbz:

Misc cleanup

=========

Build: 1.18.1-1.0.0.17 - Wed Jan 05 03:31:30 GMT 2022

adubbz:

Fixed a bug causing -1 indexes to be produced

=========

Build: 1.18.1-1.0.0.16 - Wed Jan 05 00:28:50 GMT 2022

adubbz:

Oops

adubbz:

Added various config options as well as nether support

=========

[(29 more lines)](https://www.curseforge.com/minecraft/mc-mods/terrablender/files/3599776)

## Removed

* [FindMe](https://www.curseforge.com/minecraft/mc-mods/findme)

Generated using [ChangelogGenerator 2.0.0-pre10](https://github.com/TheRandomLabs/ChangelogGenerator).
