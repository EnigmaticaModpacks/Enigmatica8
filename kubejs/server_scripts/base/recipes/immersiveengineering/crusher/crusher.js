onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/crusher/';

    const recipes = [
        {
            input: '#forge:end_stones',
            output: Item.of('occultism:crushed_end_stone', 4),
            secondary: [],
            id: 'immersiveengineering:crusher/end_stone'
        },
        {
            input: 'minecraft:nether_wart_block',
            output: Item.of('minecraft:nether_wart', 3),
            secondary: [Item.of('minecraft:nether_wart').chance(0.5)],
            id: 'immersiveengineering:crusher/nether_wart'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.crusher(recipe.output, recipe.input, recipe.secondary).id(recipe.id);
    });
});
