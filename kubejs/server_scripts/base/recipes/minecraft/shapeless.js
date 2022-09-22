onEvent('recipes', (event) => {
    const id_prefex = 'enigmatica:base/minecraft/shapeless/';
    const recipes = [
        { output: 'minecraft:crafting_table', inputs: ['#forge:workbench'], id: `${id_prefex}crafting_table` }
    ];
    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
