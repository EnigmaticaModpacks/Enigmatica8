onEvent('fluid.registry', (event) => {
    const fluids = [];

    fluids.forEach((fluid) => {
        if (fluid.type == 'thick') {
            event.create(fluid.id).textureThick(fluid.texture).bucketColor(fluid.texture).displayName(fluid.display);
        } else if (fluid.type == 'thin') {
            event.create(fluid.id).textureThin(fluid.texture).bucketColor(fluid.texture).displayName(fluid.display);
        }
    });
});
