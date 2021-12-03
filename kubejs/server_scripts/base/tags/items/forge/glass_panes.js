onEvent('item.tags', (event) => {
    colors.forEach((color) => {
        event.add(`forge:glass_panes/${color}`, [
            `connectedglass:borderless_glass_${color}_pane`,
            `connectedglass:clear_glass_${color}_pane`,
            `connectedglass:scratched_glass_${color}_pane`
        ]);
    });
});
