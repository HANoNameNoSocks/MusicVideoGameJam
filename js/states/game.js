function Game() {
    this.background = ASSET_MANAGER.getCrop("background");
    this.beatManager = new BeatManager();
    this.noteManager = new NoteManager();
};

//the beat here is a BPM / 4
beatCounter=0;

Game.prototype.update = function() {
    this.background.render(0, 0);

    var me = this;
    addEventListener("keyup", function (e) {
        STATE_MANAGER.switchToState("gameover");
    }, false);

    if(this.beatManager.isOnBeat()){
        beatCounter++;
        console.log("ON BEAT" + beatCounter);
    }

};

Game.prototype.reset = function() {
};