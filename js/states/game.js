function Game() {
    this.background = ASSET_MANAGER.getCrop("background");
    this.top = ASSET_MANAGER.getCrop("top");
    this.bottom = ASSET_MANAGER.getCrop("bottom");
    this.left = ASSET_MANAGER.getCrop("left");
    this.right = ASSET_MANAGER.getCrop("right");

    this.computerPad = new ArrowPad(false);
    this.playerPad = new ArrowPad(true);

    this.beatManager = new BeatManager();
    this.noteManager = new NoteManager();

    //the beat here is a BPM / 4
    this.beatCounter=0;
    this.counterNoteTime=0;

    this.currentNote = null;
};



Game.prototype.update = function() {
    this.background.render(0, 0);

    if (INPUT_MANAGER.inputs.win) {
        STATE_MANAGER.switchToState("gameover");
    }

    if(this.currentNote != null && this.currentNote.active == true ){
        this.displayNote(this.currentNote);
    }


    if(this.beatManager.isOnBeat()){

        if(this.currentNote != null && this.currentNote.active == true ){
            this.currentNote.update();
        }

        var note = this.noteManager.getNote(this.beatCounter);
        if( note != null){
            this.currentNote = note;
            this.currentNote.active = true;
        }

        this.beatCounter++;
    }


    var me = this;
    addEventListener("keyup", function (e) {
        STATE_MANAGER.switchToState("gameover");
    }, false);

>>>>>>> fdd483b6755e4c08af3e342e90a11154413dae9e
};

Game.prototype.displayNote = function(note){
    if(!note.forPlayer){
        switch(note.value){
            case 'T': this.top.render( this.computerPad.topArrow.x, this.computerPad.topArrow.y); break;
            case 'B': this.bottom.render( this.computerPad.bottomArrow.x, this.computerPad.bottomArrow.y); break;
            case 'L': this.left.render( this.computerPad.leftArrow.x, this.computerPad.leftArrow.y); break;
            default: this.right.render( this.computerPad.rightArrow.x, this.computerPad.leftArrow.y); break;
        }
    }
    else{
        switch(note.value){
            case 'T': this.top.render( this.playerPad.topArrow.x, this.playerPad.topArrow.y); break;
            case 'B': this.bottom.render( this.playerPad.bottomArrow.x, this.playerPad.bottomArrow.y); break;
            case 'L': this.left.render( this.playerPad.leftArrow.x, this.playerPad.leftArrow.y); break;
            default: this.right.render( this.playerPad.rightArrow.x, this.playerPad.leftArrow.y); break;
        }
    }
}

Game.prototype.reset = function() {
    this.beatCounter = 0;
    this.noteManager = new NoteManager();
};