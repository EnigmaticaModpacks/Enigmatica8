onEvent('jei.remove.categories', (event) => {
    //console.log(event.getCategoryIds()); //log a list of all category ids to logs/kubejs/client.txt

    event.remove(categoriesToHide);
});
