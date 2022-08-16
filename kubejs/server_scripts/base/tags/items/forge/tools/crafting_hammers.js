onEvent('item.tags', (event) => {
    var exceptions = [];

    var tags = ['forge:tools', 'forge:tools/crafting_hammer'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add('immersiveengineering:hammer')
            .remove(exceptions);
    });
});
