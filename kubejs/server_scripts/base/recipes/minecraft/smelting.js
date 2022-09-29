onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/minecraft/smelting/';
    const recipes = [
        {
            input: '#thermal:rockwool',
            output: 'immersiveengineering:slag_glass',
            xp: 0.1,
            id: `immersiveengineering:smelting/slag_glass`
        }
    ];

    recipes.forEach((recipe) => event.smelting(recipe.output, recipe.input).xp(recipe.xp).id(recipe.id));
});
