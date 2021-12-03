onEvent('item.tags', (event) => {
    let items = [
        'minecraft:beacon',
        'minecraft:end_rod',
        'minecraft:glowstone',
        'minecraft:lava_bucket',
        'minecraft:magma_block',
        'minecraft:shroomlight'
    ];

    event
        .get('forge:lights')
        .add(items)
        .add(/_lantern/)
        .add(/_lamp/)
        .add(/torch/)
        .add(/fire_pit/)
        .add(/shiny_flower/)
        .add(/floating_flower/)
        .add(/candle/)
        .add(/campfire/)
        .add(/_glowcane/)
        .add(/illumin/)
        .add(/sconce/)
        .add(/candelabra/)
        .add(/chandelier/)
        .add(/brazier/)
        .add(/neon_light/);
});
