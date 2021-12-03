onEvent('block.registry', (event) => {
    const blocks = [];

    blocks.forEach((block) => {
        event.create(block.name).material(block.material).hardness(block.hardness);
    });
});
