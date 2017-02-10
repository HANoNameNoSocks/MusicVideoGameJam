function AssetManager() {
    this.isReady = false;
    this.isLoading = false;

    this.assetLoader = null;
    this.animManager = null;
    this.cropManager = null;

    this._init();
};

AssetManager.prototype.load = function() {
    if (ASSET_MANAGER.assetLoader.isReady) {
        LOGGER.log("assetLoader is ready");
        ASSET_MANAGER.cropManager.createCrops();
        ASSET_MANAGER.animManager.createAnimations();
        ASSET_MANAGER.isReady = true;
    } else if (!this.isLoading) {
        LOGGER.log("asset_manager launching load operation");
        ASSET_MANAGER.assetLoader.load();
        this.isLoading = true;
        requestAnimationFrame(ASSET_MANAGER.load);
    } else {
        requestAnimationFrame(ASSET_MANAGER.load);
    }
};

AssetManager.prototype.getCrop = function(name) {
    LOGGER.log("fetching crop : " + name);
    return this.cropManager.getCrop(name);
};

AssetManager.prototype.getSpritesheet = function(name) {
    LOGGER.log("fetching spritesheet : " + name);
    return this.assetLoader.getImage(name);
};

AssetManager.prototype.getAnimation = function(name) {
   return this.animManager.getAnimation(name);
};

AssetManager.prototype.copyAnimation = function(sourceName) {
   return this.animManager.copyAnimation(sourceName);
};

AssetManager.prototype._init = function() {
    this.assetLoader = new AssetLoader();
    this.cropManager = new CropManager();
    this.animManager = new AnimManager();
};