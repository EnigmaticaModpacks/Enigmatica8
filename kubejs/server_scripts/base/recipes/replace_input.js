onEvent('recipes', (event) => {
    const recipes = [
        {
            replaceTarget: { output: 'create:belt_connector' },
            toReplace: 'minecraft:dried_kelp',
            replaceWith: ['minecraft:dried_kelp', 'sushigocrafting:dried_seaweed']
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.replaceTarget, recipe.toReplace, recipe.replaceWith);
    });
});
