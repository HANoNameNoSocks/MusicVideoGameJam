function Renderer() {
    this.renderables = [];
};

Renderer.prototype.render = function() {
    CTX.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    for (var i = 0; i < this.renderables.length; i++) {
        var renderable = this.renderables[i];
        var crop = renderable.crop;
        var spritesheet = ASSET_MANAGER.getSpritesheet(crop.spritesheetName);

        CTX.drawImage(
            spritesheet, 
            crop.sourceX, crop.sourceY, 
            crop.sourceWidth, crop.sourceHeight, 
            renderable.canvasX, renderable.canvasY, 
            crop.sourceWidth, crop.sourceHeight
        );
    }

    this.renderables = [];
};

Renderer.prototype.addToRenderList = function(crop, destX, destY) {
    this.renderables.push({ 
        crop : crop, 
        canvasX : destX,
        canvasY : destY 
    });
};