onEvent('item.tags', (event) => {
    stones.forEach((stone) => {
        event.add("forge:stone", stone);
    });
});