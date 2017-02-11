function Game() {
    this.background = ASSET_MANAGER.getCrop("background");
    this.heroAnimLeft = ASSET_MANAGER.getAnimation("hero_walk_left");
    this.heroAnimRight = ASSET_MANAGER.getAnimation("hero_walk_right");

    this.noteManager = new NoteManager();

    // On ne peut pas jouer une animation plusieurs fois en même temps il faut la copier uech
    // ATTENTION CETTE ANIMATION COPIEE NE SERA PAS TENUE PAR L'ASSET MANAGER
    this.copyAnimLeft = ASSET_MANAGER.copyAnimation("hero_walk_left");
};

//A "beat" here, is a BPM / 4

Game.prototype.update = function(onBeat) {
    this.background.render(0, 0);

    this.heroAnimLeft.play(200, 200);
    this.heroAnimRight.play(100, 100);

    this.copyAnimLeft.playOnce(300, 300);    

    if(onBeat){
        
    }
};

Game.prototype.init = function(){
    this.noteManager.init();
};