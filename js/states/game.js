function Game() {
    this.background = ASSET_MANAGER.getCrop("background");
    this.top = ASSET_MANAGER.getCrop("top");
    this.bottom = ASSET_MANAGER.getCrop("bottom");
    this.left = ASSET_MANAGER.getCrop("left");
    this.right = ASSET_MANAGER.getCrop("right");

    this.yeah = ASSET_MANAGER.getSound("yeah");
    this.bouh = ASSET_MANAGER.getSound("bouh");
    this.metronome = ASSET_MANAGER.getSound("metronome");

    this.computerPad = new ArrowPad(false);

    this.beatManager = new BeatManager();
    this.noteManager = new NoteManager();

    //the beat here is a BPM / 4
    this.beatCounter=0;
    this.counterNoteTime=0;

    this.currentNote = null;
    this.currentTrack = null;
};



Game.prototype.update = function() {
    this._isGameOver();
    //this._playSong();
    this.background.render(0, 0);

    this._renderNoteOrder();

    if (this.beatManager.isOnBeat()) {
        this._playCurrentNote();
        this._judgeMC();
        this._prepareNewBeat();
        this._markTempo();
    }
};

Game.prototype._markTempo = function() {
    if (this.beatCounter > 0 && this.beatCounter % 4 == 0) {
        this.metronome.play();
    }
};

Game.prototype._playSong = function() {
    if (this.currentTrack === null) {
        this.currentTrack = ASSET_MANAGER.getSound("awesome_track");
        this.currentTrack.play();
    }
};

Game.prototype._isGameOver = function() {
    if (this.currentTrack !== null && this.currentTrack.ended) {
        STATE_MANAGER.switchToState("gameover");
    }
};

Game.prototype._renderNoteOrder = function() {
    if (this.currentNote != null && this.currentNote.active == true && !this.currentNote.forPlayer) {
        switch (this.currentNote.value) {
            case 'T': this.top.render( this.computerPad.topArrow.x, this.computerPad.topArrow.y); break;
            case 'B': this.bottom.render( this.computerPad.bottomArrow.x, this.computerPad.bottomArrow.y); break;
            case 'L': this.left.render( this.computerPad.leftArrow.x, this.computerPad.leftArrow.y); break;
            default: this.right.render( this.computerPad.rightArrow.x, this.computerPad.leftArrow.y); break;
        }
    }
};

Game.prototype._playCurrentNote = function() {
    if (this.currentNote != null && this.currentNote.active == true) {
        this.currentNote.update();
    }
};


Game.prototype._judgeMC = function() {
    if (this.currentNote != null && this.currentNote.active == true) {
        switch (this.currentNote.value) {
            case 'T' : INPUT_MANAGER.inputs.up    ? this.yeah.play() : this.bouh.play(); break;
            case 'B' : INPUT_MANAGER.inputs.down  ? this.yeah.play() : this.bouh.play(); break;
            case 'L' : INPUT_MANAGER.inputs.left  ? this.yeah.play() : this.bouh.play(); break;
            case 'R' : INPUT_MANAGER.inputs.right ? this.yeah.play() : this.bouh.play(); break;
        }
    }
};

Game.prototype._prepareNewBeat = function() {
    var note = this.noteManager.getNote(this.beatCounter);
    if (note != null) {
        this.currentNote = note;
        this.currentNote.active = true;
    }
    this.beatCounter++;
};

Game.prototype.reset = function() {
    this.beatCounter = 0;
    this.currentTrack = null;
};