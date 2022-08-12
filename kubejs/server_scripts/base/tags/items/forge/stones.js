onEvent('item.tags', (event) => {
    event.add('forge:stones/basalt', ['minecraft:basalt']);
    event.add('forge:stones/granite', ['minecraft:granite', 'minecraft:polished_granite']);
    event.add('forge:stones/diorite', ['minecraft:diorite', 'minecraft:polished_diorite']);
    event.add('forge:stones/andesite', ['minecraft:andesite', 'minecraft:polished_andesite']);
});