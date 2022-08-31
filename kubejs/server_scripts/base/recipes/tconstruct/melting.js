onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/tconstruct/melting/';
    const recipes = [
        {
            ingredient: { item: 'minecraft:chain' },
            result: { fluid: 'tconstruct:molten_iron', amount: 11 },
            temperature: 800,
            time: 58,
            id: 'tconstruct:smeltery/melting/metal/iron/chain'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:melting';
        event.custom(recipe).id(recipe.id);
    });
});
