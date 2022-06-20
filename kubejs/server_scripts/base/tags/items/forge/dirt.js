onEvent('item.tags', (event) => {
    event.get('forge:dirt').add(['minecraft:dirt']);

    event.remove('forge:dirt', ['supplementaries:fodder']);
});
