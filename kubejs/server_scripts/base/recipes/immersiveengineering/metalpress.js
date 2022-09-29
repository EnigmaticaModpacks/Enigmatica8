onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/metal_press/';

    const recipes = [
        {
            output: 'minecraft:blaze_rod',
            input: '5x minecraft:blaze_powder',
            mold: 'immersiveengineering:mold_rod',
            id: `immersiveengineering:metalpress/blaze_rod`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold).id(recipe.id);
    });
});
