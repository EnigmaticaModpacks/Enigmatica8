onEvent('item.tags', (event) => {
    var items = ['botania:black_hole_talisman', 'industrialforegoing:black_hole_controller'];

    var tags = ['forge:storage', 'forge:storage/bulk'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/black_hole_unit/)
            .add('#functionalstorage:drawer')
            .add(/qio_drive/)
            .add(/mekanism:\w+_bin/)
            .add(/refinedstorage:\w+storage/)
            .add(/ae2:cell_component_/)
            .add(/ae2:item_storage_cell_/)
            .add(/ae2things:disk_drive_/)
    });
});
