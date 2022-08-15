onEvent('item.tags', (event) => {
    event.add('forge:storage/basic/wooden','#sophisticatedstorage:base_tier_wooden_storage','sophisticatedstorage:basic_tier_upgrade','sophisticatedstorage:shulker_box')
    event.add('forge:storage/basic/iron', /sophisticatedstorage:iron_/,'sophisticatedstorage:basic_to_iron_tier_upgrade');
    event.remove('forge:storage/basic/iron','sophisticatedstorage:iron_to_gold_tier_upgrade')
    event.add('forge:storage/basic/gold', /sophisticatedstorage:gold_/,'sophisticatedstorage:iron_to_gold_tier_upgrade');
    event.remove('forge:storage/basic/gold','sophisticatedstorage:gold_to_diamond_tier_upgrade')
    event.add('forge:storage/basic/diamond', /sophisticatedstorage:diamond_/,'sophisticatedstorage:gold_to_diamond_tier_upgrade');
    event.remove('forge:storage/basic/diamond','sophisticatedstorage:diamond_to_netherite_tier_upgrade')
    event.add('forge:storage/basic/netherite', /sophisticatedstorage:netherite_/,'sophisticatedstorage:diamond_to_netherite_tier_upgrade');
});
