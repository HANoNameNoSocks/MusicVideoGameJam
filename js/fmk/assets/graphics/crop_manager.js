function CropManager() {
    this.crops = [];
};

CropManager.prototype.createCrops = function() {
    this.crops["background"] = new Crop("background", CANVAS_WIDTH, CANVAS_HEIGHT, 0, 0);
    this.crops["title"] = new Crop("title", CANVAS_WIDTH, CANVAS_HEIGHT, 0, 0);
    this.crops["gameover"] = new Crop("gameover", CANVAS_WIDTH, CANVAS_HEIGHT, 0, 0);
};

CropManager.prototype.getCrop = function(name) {
    return this.crops[name];
};