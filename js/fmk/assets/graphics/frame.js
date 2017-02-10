function Frame(crop, duration) {
    this.crop = crop;
    this.duration = duration;
};

Frame.prototype.render = function(canvasX, canvasY) {
    this.crop.render(canvasX, canvasY);
};