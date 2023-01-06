onEvent('recipes', (event) => {
    const id_prefex = 'enigmatica:base/thermal/shapeless/';
    const recipes = [
        { output: 'thermal:slag', inputs: ['#forge:slag'], id: `${id_prefex}slag_from_slag` },
        { output: 'thermal:slag', inputs: ['minecraft:barrier'], id: `${id_prefex}slag_from_barrier_bugfix` }
    ];
    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
