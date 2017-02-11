function CropManager() {
    this.crops = [];
};

CropManager.prototype.createCrops = function() {
    this.crops["hero_walk_left_0"] = new Crop("hero_walk_left", HERO_WIDTH, HERO_HEIGHT, 0, 0);
    this.crops["hero_walk_left_1"] = new Crop("hero_walk_left", HERO_WIDTH, HERO_HEIGHT, 65, 0);
    this.crops["hero_walk_left_2"] = new Crop("hero_walk_left", HERO_WIDTH, HERO_HEIGHT, 130, 0);

    this.crops["hero_walk_right_0"] = new Crop("hero_walk_right", HERO_WIDTH, HERO_HEIGHT, 0, 0);
    this.crops["hero_walk_right_1"] = new Crop("hero_walk_right", HERO_WIDTH, HERO_HEIGHT, 65, 0);
    this.crops["hero_walk_right_2"] = new Crop("hero_walk_right", HERO_WIDTH, HERO_HEIGHT, 130, 0);

    this.crops["rapper_0"] = new Crop("rapper", HERO_WIDTH, HERO_HEIGHT, 0, 0);
    this.crops["rapper_1"] = new Crop("rapper", HERO_WIDTH, HERO_HEIGHT, 65, 0);
    this.crops["rapper_2"] = new Crop("rapper", HERO_WIDTH, HERO_HEIGHT, 130, 0);
    

    this.crops["background"] = new Crop("background", CANVAS_WIDTH, CANVAS_HEIGHT, 0, 0);
};

CropManager.prototype.getCrop = function(name) {
    return this.crops[name];
};