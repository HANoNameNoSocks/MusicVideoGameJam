function Renderer() {
    this.renderables = [];
    this.hudMessages = [];
};

Renderer.prototype.render = function() {
    CTX.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    this._renderImages();
    this._renderHudMessages();

    this.renderables = [];
    this.hudMessages = [];
};

Renderer.prototype._renderHudMessages = function() {
    for (var i = 0; i < this.hudMessages.length; i++) {
        var hudMessage = this.hudMessages[i];

        var message = hudMessage.message;
        var x = hudMessage.x;
        var y = hudMessage.y;

        CTX.fillText(message, x, y);
    }
};

Renderer.prototype._renderImages = function() {
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
};

Renderer.prototype.addHudMessage = function(str, x, y) {
    this.hudMessages.push({
        message : str,
        x : x,
        y : y
    });
};

Renderer.prototype.addToRenderList = function(crop, destX, destY) {
    this.renderables.push({ 
        crop : crop, 
        canvasX : destX,
        canvasY : destY 
    });
};