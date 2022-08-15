onEvent('item.tags', (event) => {
    var items = [
        'chiselsandbits:bit_storage',
        'rftoolsutility:tank',
        'thermal:fluid_cell',
        'industrialforegoing:black_hole_controller',
        'mekanism:dynamic_valve'
    ];
    var exceptions = [
        'pneumaticcraft:etching_tank',
        'mekanism:scuba_tank',
        'mekanism:basic_chemical_tank',
        'mekanism:advanced_chemical_tank',
        'mekanism:elite_chemical_tank',
        'mekanism:ultimate_chemical_tank',
        'mekanism:creative_chemical_tank'
    ];
    var tags = ['forge:storage', 'forge:storage/liquid', 'forge:storage/fluid'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_tank/)
            .add(/fluid_storage/)
            .add(/extrastorage:\w+_fluid/)
            .add(/ae2:fluid_storage_cell_/)
            .remove(exceptions);
    });
});
