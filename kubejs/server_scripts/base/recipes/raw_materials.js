onEvent('recipes', (event) => {
    materialsToUnify.forEach((material) => {
        let tagString = `#forge:raw_materials/${material}`;
        let tag = Ingredient.of(tagString);
        if (tag && tag?.stacks.size() > 1) {
            let ore = getPreferredItemInTag(tag);
            event.shapeless(ore, `#forge:raw_materials/${material}`);
        }
    });
});