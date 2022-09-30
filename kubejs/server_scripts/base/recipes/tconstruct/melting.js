onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:tconstruct/melting/';
    const recipes = [
        {
            ingredient: { item: 'minecraft:chain' },
            result: { fluid: 'tconstruct:molten_iron', amount: 11 },
            temperature: 800,
            time: 58,
            id: 'tconstruct:smeltery/melting/metal/iron/chain'
        },
        {
            ingredient: { item: 'ae2:quartz_block' },
            result: { fluid: 'jaopca:molten.certus_quartz', amount: 400 },
            temperature: 700,
            time: 99,
            id: 'jaopca:tconstruct.storage_block_to_molten.certus_quartz'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:melting';
        event.custom(recipe).id(recipe.id);
    });
});
