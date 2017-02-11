function AssetLoader() {
    this.images = [];
    this.totalToLoad = APP_TOTAL_ASSETS_NB;
    this.totalLoaded = 0;
    this.isReady = false;
};

AssetLoader.prototype.load = function() {
    LOGGER.log("loading assets");

    this._loadImage("background", "resources/img/background.png", 512, 480);
    this._loadImage("title", "resources/img/title.png", 512, 480);
    this._loadImage("gameover", "resources/img/gameover.png", 512, 480);
};

AssetLoader.prototype.getImage = function(name) {
    return this.images[name];
};

AssetLoader.prototype._loadImage = function(name, src, width, height) {
    var img = new Image(width, height);
    img.src = src;

    var me = this;
    img.onload = function() {
        me.images[name] = img;

        me.totalLoaded++;

        if (me.totalLoaded === me.totalToLoad) {
            LOGGER.log("assets loaded");
            me.isReady = true;
        }
    };
};