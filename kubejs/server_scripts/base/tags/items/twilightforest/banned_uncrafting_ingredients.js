onEvent('item.tags', (event) => {
    event.get('twilightforest:banned_uncrafting_ingredients').add(/.*/);
});
