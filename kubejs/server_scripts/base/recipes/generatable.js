onEvent('recipes', (event) => {    
    const industrialforegoing = (event, material, type) => {
        let waterConsume = 0;
        let lavaConsume = 0;
    
        if (type == 'stone') {
            waterConsume = 1000;
        }
    
        event.custom({
            output: {
                item: material,
                count: 1
            },
            waterNeed: 1000,
            lavaNeed: 1000,
            waterConsume: waterConsume,
            lavaConsume: lavaConsume,
            type: 'industrialforegoing:stonework_generate'
        });
    }
    
    const thermal = (event, material) => {
        event.custom({
            type: 'thermal:rock_gen',
            adjacent: 'minecraft:water',
            below: material,
            result: {
                item: material
            }
        });
    }

    cobblestones.forEach((material) => {
        industrialforegoing(event, material, 'cobblestone');
        thermal(event, material);
    });

    stones.forEach((material) => {
        industrialforegoing(event, material, 'stone');
        thermal(event, material);
    });
});