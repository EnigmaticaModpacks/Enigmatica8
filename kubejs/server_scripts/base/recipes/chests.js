onEvent("recipes", event => {
    event.shaped('1x minecraft:chest', [
        'SSS',
        'S S',
        'SSS'
    ], {
        S: '#minecraft:planks'
    });
    event.shaped('4x minecraft:chest', [
        'SSS',
        'S S',
        'SSS'
    ], {
        S: '#minecraft:logs'
    });
});