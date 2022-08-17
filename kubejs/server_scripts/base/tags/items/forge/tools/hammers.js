onEvent('item.tags', (event) => {
    var exceptions = [];

    var tags = ['forge:tools', 'forge:tools/hammer'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(/vanillahammers:\w+_hammer/)
            .remove(exceptions);
    });
});
