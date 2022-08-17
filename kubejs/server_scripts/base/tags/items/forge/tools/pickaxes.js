onEvent('item.tags', (event) => {
    var items = [
        'botania:manasteel_pick',
        'botania:terra_pick',
        'immersiveengineering:pickaxe_steel',
        'mythicbotany:alfsteel_pick',
        'bloodmagic:soulpickaxe',
        'tconstruct:pickaxe'
    ];

    var exceptions = [];

    var tags = ['forge:tools', 'forge:tools/pickaxe'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_pickaxe/)
            .add(/_paxel/)
            .add(/_aiot/)
            .remove(exceptions);
    });
});
