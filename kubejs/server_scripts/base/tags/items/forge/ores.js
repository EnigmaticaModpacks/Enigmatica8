onEvent('item.tags', (event) => {
    event.add('forge:ores', ['minecraft:ancient_debris']);
    event.add('forge:ores/nether/gold', ['minecraft:nether_gold_ore']);
    event.add('forge:ores/netherite', 'minecraft:ancient_debris');
});
