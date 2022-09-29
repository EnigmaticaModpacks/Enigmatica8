onEvent('recipes', (event) => {
    const removals = {
        byType: ['mekanism:combining'],
        byId: [],
        byOutput: [],
        byMod: [],
        byInput: []
    };

    disabledItems.forEach((disabledItem) => event.remove({ output: disabledItem }));

    removals.byType.forEach((removal) => {
        event.remove({ type: removal });
    });
    removals.byId.forEach((removal) => {
        event.remove({ id: removal });
    });
    removals.byOutput.forEach((removal) => {
        event.remove({ output: removal });
    });
    removals.byMod.forEach((removal) => {
        event.remove({ mod: removal });
    });
    removals.byInput.forEach((removal) => {
        event.remove({ input: removal });
    });
});
