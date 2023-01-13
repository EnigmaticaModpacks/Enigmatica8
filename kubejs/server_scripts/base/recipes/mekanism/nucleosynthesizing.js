onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/mekanism/nucleosynthesizing/';
    /* 
        Recipes use about 40k rf per point of duration. 
        Duration is not a fixed speed, as the machine runs at 10000% speed when the energy buffer is full.  
           
    */
    let recipes = [
        {
            itemInput: { ingredient: Item.of('industrialforegoing:infinity_trident').ignoreNBT().toJson() },
            gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
            output: Item.of('industrialforegoing:infinity_trident', '{CanCharge:1b,Channeling:0b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"ARTIFACT",Special:0b}'),
            duration: 2500000,
            id: `${id_prefix}infinity_trident`
            //Approximately 100 billion RF to complete the craft.
        },
        {
            itemInput: { ingredient: Item.of('industrialforegoing:infinity_hammer').ignoreNBT().toJson() },
            gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
            output: Item.of('industrialforegoing:infinity_hammer', '{Beheading:0,CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"ARTIFACT",Special:0b}'),
            duration: 2500000,
            id: `${id_prefix}infinity_hammer`
            //Approximately 100 billion RF to complete the craft.
        },
        {
            itemInput: { ingredient: Item.of('industrialforegoing:infinity_drill').ignoreNBT().toJson() },
            gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
            output: Item.of('industrialforegoing:infinity_drill', '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"ARTIFACT",Special:0b}'),
            duration: 2500000,
            id: `${id_prefix}infinity_drill`
            //Approximately 100 billion RF to complete the craft.
        },
        {
            itemInput: { ingredient: Item.of('industrialforegoing:infinity_saw').ignoreNBT().toJson() },
            gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
            output: Item.of('industrialforegoing:infinity_saw', '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"ARTIFACT",Special:0b}'),
            duration: 2500000,
            id: `${id_prefix}infinity_saw`
            //Approximately 100 billion RF to complete the craft.
        },
        {
            itemInput: { ingredient: Item.of('industrialforegoing:infinity_backpack').ignoreNBT().toJson() },
            gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
            output: Item.of('industrialforegoing:infinity_backpack', '{CanCharge:1b,Energy:9223372036854775807L,Selected:"ARTIFACT",Special:0b}'),
            duration: 2500000,
            id: `${id_prefix}infinity_backpack`
            //Approximately 100 billion RF to complete the craft.
        },
        {
            itemInput: { ingredient: Item.of('industrialforegoing:infinity_nuke').ignoreNBT().toJson() },
            gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
            output: Item.of('industrialforegoing:infinity_nuke', '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"ARTIFACT",Special:0b}'),
            duration: 2500000,
            id: `${id_prefix}infinity_nuke`
            //Approximately 100 billion RF to complete the craft.
        },
        {
            itemInput: { ingredient: Item.of('industrialforegoing:infinity_launcher').ignoreNBT().toJson() },
            gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
            output: Item.of('industrialforegoing:infinity_launcher', '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:"biofuel"},Plunger:0,Selected:"ARTIFACT",Special:0b}'),
            duration: 2500000,
            id: `${id_prefix}infinity_launcher`
            //Approximately 100 billion RF to complete the craft.
        }
    ]

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:nucleosynthesizing';
        event.custom(recipe).id(recipe.id);
    });
});
