onEvent('item.tags', (event) => {
    var items = ['immersiveengineering:hoe_steel'];
    var exceptions = [];

    var tags = ['forge:tools', 'forge:tools/hoe'];

    tags.forEach((tag) => {
        event.get(tag).add(items).add(/_hoe/).add(/_aiot/).remove(exceptions);
    });
});
