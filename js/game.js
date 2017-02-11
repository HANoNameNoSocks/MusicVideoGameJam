function Game() {
    this.background = ASSET_MANAGER.getCrop("background");
    this.heroAnimLeft = ASSET_MANAGER.getAnimation("hero_walk_left");
    this.heroAnimRight = ASSET_MANAGER.getAnimation("hero_walk_right");

    // On ne peut pas jouer une animation plusieurs fois en même temps il faut la copier uech
    // ATTENTION CETTE ANIMATION COPIEE NE SERA PAS TENUE PAR L'ASSET MANAGER
    this.copyAnimLeft = ASSET_MANAGER.copyAnimation("hero_walk_left");
};

Game.prototype.update = function() {
    this.background.render(0, 0);

    this.heroAnimLeft.play(200, 200);
    this.heroAnimRight.play(100, 100);

    this.copyAnimLeft.playOnce(300, 300);    
};