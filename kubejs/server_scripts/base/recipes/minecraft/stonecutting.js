onEvent('recipes', (event) => {
    const id_prefex = 'enigmatica:base/minecraft/stonecutting/';

    const recipes = [
        {
            output: '4x minecraft:cut_copper',
            input: 'minecraft:copper_block',
            id: `minecraft:cut_copper_from_copper_block_stonecutting`
        }
    ];

    recipes.forEach((recipe) => {
        event.stonecutting(recipe.output, recipe.input).id(recipe.id);
    });
});
