onEvent('recipes', (event) => {
    const id_prefex = 'enigmatica:base/minecraft/shaped/';

    const recipes = [
        {
            output: '16x minecraft:stick',
            pattern: ['A', 'A'],
            key: {
                A: '#minecraft:logs'
            },
            id: `${id_prefex}stick_16`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
