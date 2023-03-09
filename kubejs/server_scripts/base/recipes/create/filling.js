onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/create/filling/';
    const recipes = [
        {
            input: 'minecraft:cobblestone',
            fluid: Fluid.of('minecraft:lava', 500),
            output: 'minecraft:magma_block',
            id: `${id_prefix}magma_block_from_lava`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input]).id(recipe.id);
    });
});
