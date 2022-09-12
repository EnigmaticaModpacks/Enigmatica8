onEvent('jei.hide.items', (event) => {
    itemsToHide.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });

    disabledItems.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });
});
