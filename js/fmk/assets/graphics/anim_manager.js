function AnimManager() {
    this.animations = []; 
};

AnimManager.prototype.createAnimations = function() {
    
    var frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("hero_walk_right_0"), 10);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("hero_walk_right_1"), 10);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("hero_walk_right_2"), 10);
    this.animations["hero_walk_right"] = new Anim(frames);

    var frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("hero_walk_left_0"), 10);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("hero_walk_left_1"), 10);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("hero_walk_left_2"), 10);
    this.animations["hero_walk_left"] = new Anim(frames);
};

AnimManager.prototype.getAnimation = function(name) {
    return this.animations[name];
};

AnimManager.prototype.copyAnimation = function(sourceName) {
    return new Anim(this.animations[sourceName].frames);
};