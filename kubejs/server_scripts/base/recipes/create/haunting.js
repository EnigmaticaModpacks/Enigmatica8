onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/create/haunting/';
    const recipes = [
        {
            outputs: ['minecraft:netherrack'],
            input: 'minecraft:magma_block',
            id: `${id_prefix}haunting_netherrack`
        }
    ]

    recipes.forEach((recipe) => {
        event.recipes.create.haunting(recipe.outputs, recipe.input).id(recipe.id);
    });
});
