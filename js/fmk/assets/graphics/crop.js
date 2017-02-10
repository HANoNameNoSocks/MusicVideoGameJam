function Crop(spritesheetName, sourceWidth, sourceHeight, sourceX, sourceY) {
    this.spritesheetName = spritesheetName;
    this.sourceWidth = sourceWidth;
    this.sourceHeight = sourceHeight;
    this.sourceX = sourceX;
    this.sourceY = sourceY;
};

Crop.prototype.render = function(canvasX, canvasY) {
    var me = this;
    RENDERER.addToRenderList(me, canvasX, canvasY);
};