function AssetLoader() {
    this.images = [];
    this.sounds = [];
    this.totalToLoad = 11;
    this.totalLoaded = 0;
    this.isReady = false;
};

AssetLoader.prototype.load = function() {
    LOGGER.log("loading assets");

    this.totalLoaded = 0;

    this._loadImage("background", "resources/img/background.png", 512, 480);
    this._loadImage("title", "resources/img/title.png", 512, 480);
    this._loadImage("gameover", "resources/img/gameover.png", 512, 480);
    this._loadImage("top", "resources/img/top.png", ARROW_WIDTH, ARROW_HEIGHT);
    this._loadImage("bottom", "resources/img/bottom.png", ARROW_WIDTH, ARROW_HEIGHT);
    this._loadImage("left", "resources/img/left.png", ARROW_WIDTH, ARROW_HEIGHT);
    this._loadImage("right", "resources/img/right.png", ARROW_WIDTH, ARROW_HEIGHT);

    this._loadSound("awesome_track", "resources/snd/awesome_track.wav");
    this._loadSound("yeah", "resources/snd/yeah.wav");
    this._loadSound("bouh", "resources/snd/bouh.wav");
    this._loadSound("metronome", "resources/snd/neutral_blip.wav");
};

AssetLoader.prototype.getImage = function(name) {
    return this.images[name];
};

AssetLoader.prototype.getSound = function(name) {
    return this.sounds[name];
};

AssetLoader.prototype._loadSound = function(name, src) {
    LOGGER.log("starting to load asset named : " + name);
    var snd = new Audio(src);

    var me = this;
    snd.oncanplaythrough = function() {
        me.sounds[name] = snd;
        me.totalLoaded++;
        if (me.totalLoaded === me.totalToLoad) {
            LOGGER.log("assets loaded");
            me.isReady = true;
        }
    };
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