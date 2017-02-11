function AnimManager() {
    this.animations = []; 
};

AnimManager.prototype.createAnimations = function() {
};

AnimManager.prototype.getAnimation = function(name) {
    return this.animations[name];
};

AnimManager.prototype.copyAnimation = function(sourceName) {
    return new Anim(this.animations[sourceName].frames);
};