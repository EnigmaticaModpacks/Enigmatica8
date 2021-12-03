onEvent('item.tags', (event) => {
    event.add('forge:gems', ['minecraft:ender_pearl', 'minecraft:coal']);
    event.add('forge:gems/ender', 'minecraft:ender_pearl');
    event.add('forge:gems/coal', 'minecraft:coal');
    event.add('forge:gems/charcoal', 'minecraft:charcoal');
});
