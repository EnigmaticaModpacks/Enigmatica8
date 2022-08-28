onEvent('jei.information', (event) => {
    const recipes = [
        {
            items: ['farmersdelight:ham'],
            text: ['Obtained by killing Pigs or Hoglins with a knife.']
        },
        {
            items: ['buildinggadgets:construction_paste'],
            text: ['Obtained by breaking a Dense Construction Block with a Pickaxe.']
        },

        {
            items: ['thermal:blizz_rod', 'thermal:blizz_spawn_egg'],
            text: ['The Blizz spawns naturally in cold biomes. Mechanical Dirt works wonders for farming them.']
        },
        {
            items: ['thermal:blitz_rod', 'thermal:blitz_spawn_egg'],
            text: ['The Blitz spawns naturally in warm, dry biomes. Mechanical Dirt works wonders for farming them.']
        },
        {
            items: ['thermal:basalz_rod', 'thermal:basalz_spawn_egg'],
            text: [
                'The Basalz spawns naturally in barren biomes, such as Badlands. Mechanical Dirt works wonders for farming them.'
            ]
        },
        {
            items: ['byg:warped_cactus'],
            text: ['Obtained by tossing Cactus through a Nether Portal from the Overworld']
        },
        {
            items: ['byg:warped_coral', 'byg:warped_coral_fan', 'byg:warped_coral'],
            text: ['Obtained by tossing any coral through a Nether Portal from the Overworld']
        },
        {
            items: [
                'quark:red_crystal',
                'quark:orange_crystal',
                'quark:yellow_crystal',
                'quark:green_crystal',
                'quark:blue_crystal',
                'quark:indigo_crystal',
                'quark:violet_crystal',
                'quark:white_crystal',
                'quark:black_crystal'
            ],
            text: [
                'Will grow up to four blocks tall if placed deep underground. Will emit particles while growing.',
                ' ',
                'May sprout Corundum Clusters as well.'
            ]
        },
        {
            items: [/quark:\w+_crystal_cluster/],
            text: ['Grows occasionally on Corundum Blocks when grown underground.']
        },
        {
            items: ['quark:bottled_cloud'],
            text: ['Obtained by Right-Clicking a Glass Bottle in the air between Y Levels 126 and 132.']
        },
        {
            items: [Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:overworld' })],
            text: [
                'Obtained by Right-Clicking a Bottle and Cork in the air in the Overworld or Atum. This action removes Aura from the area.',
                ' ',
                `Can be automated using a Dispenser.`
            ]
        },
        {
            items: [Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:end' })],
            text: [
                'Obtained by Right-Clicking a Bottle and Cork in the air in the End or The Undergarden. This action removes Aura from the area.',
                ' ',
                `Can be automated using a Dispenser.`
            ]
        },
        {
            items: [Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:nether' })],
            text: [
                'Obtained by Right-Clicking a Bottle and Cork in the air in the Nether. This action removes Aura from the area.',
                ' ',
                `Can be automated using a Dispenser.`
            ]
        },
        {
            items: ['quark:root_item'],
            text: [
                'Drops occasionally when breaking Cave Roots.',
                ' ',
                'Cave Roots may be crafted and grown just like Vines, though they require low light to grow.'
            ]
        },
        {
            items: ['quark:root'],
            text: ['May be crafted and grown just like Vines, though they require low light to grow.']
        },
        {
            items: ['minecraft:firework_rocket'],
            text: [`Shapeless Crafting: One paper and at least one gunpowder.`]
        },
        {
            items: ['minecraft:firework_rocket'],
            text: [
                `Adding more gunpowder increases the duration of the rocket.`,
                `Up to three gunpowder or up to seven firework stars can be added.`
            ]
        },
        {
            items: ['minecraft:firework_star'],
            text: [`Shapeless Crafting: One gunpowder and at least one dye.`]
        },
        {
            items: ['minecraft:firework_star'],
            text: [
                `Up to eight dyes can be added.`,
                `One head, gold nugget, feather, or fire charge can be added to set a shape.`,
                `A diamond and/or a glowstone dust can be added with any of the other ingredients.`
            ]
        },
        {
            items: ['minecraft:dragon_egg'],
            text: [
                `More eggs may be obtained by summoning the End Dragon again.`,
                ` `,
                `To summon, place an End Crystal on each of the cardinal directions of the End Portal in the End.`
            ]
        },
        {
            items: ['byg:leaf_pile'],
            text: [`Gathered with Shears.`]
        },
        {
            items: ['atum:anputs_fingers_spores'],
            text: [`Found occasionally growing beneath Deadwood Trees. Requires darkness to grow.`]
        },
        {
            items: ['immersiveengineering:furnace_heater', 'mekanism:fuelwood_heater', 'mekanism:resistive_heater'],
            text: [`May be used to provide Heat for PneumaticCraft machines.`]
        },
        {
            items: ['immersiveengineering:logic_circuit'],
            text: [
                `Used in a Logic Unit to create advanced Redstone Logic.`,
                ` `,
                `Crafted in an Engineer's Circuit Table. Requires Circuit Backplanes and Lead or Copper Wire. Vacuum Tubes are required for all operators except SET.`
            ]
        },
        {
            items: ['alexsmobs:hemolymph_sac', 'alexsmobs:warped_muscle'],
            text: [
                `Obtained by defeating the Warped Mosco.`,
                ` `,
                `Warped Mosco are creatures of nightmare created when a Crimson Mosquito sucks the blood of a Mungus covered in Warped Fungus.`
            ]
        },
        {
            items: ['alexsmobs:hemolymph_sac', 'alexsmobs:warped_muscle'],
            text: [
                `Mungus may be summoned through the Altar of Birthing, while Crimson Mosquitos may be created by bringing a Fly into the Nether.`
            ]
        },
        {
            items: ['bloodmagic:weak_tau'],
            text: [`Found in chests within the Demon Realm.`]
        },
        {
            items: ['bloodmagic:strong_tau'],
            text: [`Produced by growing Tau near mobs.`]
        },
        {
            items: ['immersiveengineering:cloche'],
            text: [
                `Available Fertilizers:`,
                ` `,
                `Bone Meal: 1.25x`,
                `Floral Fertilizer: 1.5x`,
                `Green Fertilizer: 1.5x`,
                `Fertilizer: 1.7x`,
                `Red Fertilizer: 2.0x`,
                `Phyto-Gro: 3.0x`
            ]
        },
        {
            items: ['quark:dragon_scale'],
            text: [`Only drops from Ender Dragons after the first one has been killed.`]
        },
        {
            items: ['quark:slime_in_a_bucket'],
            text: [`Scoop up a small slime in an empty bucket.`]
        },
        {
            items: ['alexsmobs:mysterious_worm'],
            text: [
                `Summons a Void Worm when tossed into the void in The End.`,
                ` `,
                `Place a Crimson Mosquito Larva inside a Capsid to obtain.`
            ]
        },
        {
            items: ['alexsmobs:capsid'],
            text: [
                `Dropped by Enderiophage.`,
                ` `,
                `Enderiophage may be found in the wild in the End Midlands biome. They may also be called forth by consuming Otherworldly Honey.`
            ]
        },
        {
            items: ['naturesaura:gold_leaf'],
            text: [`Obtained by breaking Golden Leaves.`]
        },
        {
            items: ['naturesaura:golden_leaves'],
            text: [`Obtained by using Brilliant Fiber on leaves. Allow to spread for best effect.`]
        },
        {
            items: ['naturesaura:break_prevention'],
            text: [
                `When applied to a tool in an anvil, the tool will just stop working when durability runs out, instead of being destroyed.`
            ]
        },
        {
            items: ['ars_nouveau:belt_of_levitation'],
            text: [`When equipped in the belt slot, hold the sneak key while airborne to float.`]
        },
        {
            items: ['create:chromatic_compound', 'create:refined_radiance'],
            text: [
                `Chromatic Compound absorbs light when dropped in the world, transforming into Refined Radiance. Charges slowly from ambient light, faster by consuming nearby light emitting blocks, and instantly when dropped onto an active beacon.`
            ]
        },
        {
            items: ['create:chromatic_compound', 'create:shadow_steel'],
            text: [
                `Chromatic Compound absorbs darkness when dropped into the void, returning as Shadow Steel, floating back up out of the void shortly after falling into the depths.`
            ]
        },
        {
            items: ['naturesaura:projectile_generator'],
            text: [`Valid Projectiles:`, ``, `● Snowballs`, `● Eggs`, `● Arrows`, `● Fire Charges`, `● Spectral Arrows`]
        },
        {
            items: ['naturesaura:projectile_generator'],
            text: [`● Ender Pearls`, `● Llama Spit`, `● Bottles o' Enchanting`, `● Shulker Bullets`, `● Tridents`]
        },
        {
            items: ['naturesaura:birth_spirit'],
            text: [`Obtained by manually breeding animals in high Aura areas.`]
        }
    ];

    recipes.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.add(item, recipe.text);
        });
    });

    generatableCobblestone.forEach((cobblestone) => {
        event.add(
            cobblestone,
            'Can be generated in a Vanilla Cobblestone Generator. The block below where the Cobblestone generates needs to be a Block of Iron.'
        );
    });

    generatableStone.forEach((stone) => {
        event.add(
            stone,
            'Can be generated in a Vanilla Stone Generator. The block below where the Stone generates needs to be a Block of Diamond.'
        );
    });
});
