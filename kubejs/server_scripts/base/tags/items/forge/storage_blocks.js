onEvent('item.tags', (event) => {
    let storageBlocks = 'forge:storage_blocks';
    event.add(storageBlocks, ['minecraft:glowstone']);
    event.add(`${storageBlocks}/glowstone`, 'minecraft:glowstone');
});
