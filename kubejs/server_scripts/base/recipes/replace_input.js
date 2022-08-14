onEvent('recipes', (event) => {
    const recipes = [
        {
            replaceTarget: { output: 'create:belt_connector' },
            toReplace: 'minecraft:dried_kelp',
            replaceWith: ['minecraft:dried_kelp', 'sushigocrafting:dried_seaweed']
        },
        {
            replaceTarget: { id: 'immersiveengineering:crafting/concrete2' },
            toReplace: 'immersiveengineering:slag',
            replaceWith: '#forge:slag'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.replaceTarget, recipe.toReplace, recipe.replaceWith);
    });
});
