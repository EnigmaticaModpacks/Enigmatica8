onEvent('item.tags', (event) => {
    event.add('sophisticatedstorage:storage_wooden','#sophisticatedstorage:base_tier_wooden_storage','sophisticatedstorage:basic_tier_upgrade','sophisticatedstorage:shulker_box')
    event.add('sophisticatedstorage:storage_iron', /sophisticatedstorage:iron_/,'sophisticatedstorage:basic_to_iron_tier_upgrade');
    event.remove('sophisticatedstorage:storage_iron','sophisticatedstorage:iron_to_gold_tier_upgrade')
    event.add('sophisticatedstorage:storage_gold', /sophisticatedstorage:gold_/,'sophisticatedstorage:iron_to_gold_tier_upgrade');
    event.remove('sophisticatedstorage:storage_gold','sophisticatedstorage:gold_to_diamond_tier_upgrade')
    event.add('sophisticatedstorage:storage_diamond', /sophisticatedstorage:diamond_/,'sophisticatedstorage:gold_to_diamond_tier_upgrade');
    event.remove('sophisticatedstorage:storage_diamond','sophisticatedstorage:diamond_to_netherite_tier_upgrade')
    event.add('sophisticatedstorage:storage_netherite', /sophisticatedstorage:netherite_/,'sophisticatedstorage:diamond_to_netherite_tier_upgrade');
});
