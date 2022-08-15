onEvent('item.tags', (event) => {
    event.add('forge:storage/basic/wooden','#sophisticatedstorage:base_tier_wooden_storage','sophisticatedstorage:basic_tier_upgrade','sophisticatedstorage:basic_to_iron_tier_upgrade','sophisticatedstorage:shulker_box')
    event.add('forge:storage/basic/iron', /sophisticatedstorage:iron_/);
    event.add('forge:storage/basic/gold', /sophisticatedstorage:gold_/);
    event.add('forge:storage/basic/diamond', /sophisticatedstorage:diamond_/);
    event.add('forge:storage/basic/netherite', /sophisticatedstorage:netherite_/);
});
