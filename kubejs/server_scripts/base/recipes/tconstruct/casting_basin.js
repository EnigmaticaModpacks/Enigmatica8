onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:tconstruct/casting_basin/';
    var data = {
        recipes: [
            {
                fluid: 'jaopca:molten.certus_quartz',
                fluid_amount: 400,
                output: 'ae2:quartz_block',
                cooling_time: 132,
                id: 'jaopca:tconstruct.molten_to_storage_block.certus_quartz'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'tconstruct:casting_basin',
            fluid: {
                name: recipe.fluid,
                amount: recipe.fluid_amount
            },
            result: recipe.output,
            cooling_time: recipe.cooling_time
        };

        if (recipe.casts) {
            constructed_recipe.cast = {
                type: 'forge:intersection',
                children: recipe.casts
            };
            constructed_recipe.cast_consumed = recipe.cast_consumed;
        }

        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
