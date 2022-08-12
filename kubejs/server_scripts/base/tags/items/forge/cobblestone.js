onEvent('item.tags', (event) => {
    cobblestones.forEach((cobblestone) => {
        event.add("forge:cobblestone", cobblestone);
    });
});