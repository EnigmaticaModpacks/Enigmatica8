onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/create/splashing/';
    const recipes = [
        {
            outputs: ['minecraft:netherrack'],
            input: 'minecraft:magma_block',
            id: `${id_prefix}cooling_netherrack`
        }
    ]

    recipes.forEach((recipe) => {
        event.recipes.create.splashing(recipe.outputs, recipe.input).id(recipe.id);
    });
});
