function NoteManager(){

    this.notes = this.getNotes();

}

NoteManager.prototype.getNotes = function(){
    //INSERT THE NOTE HERE !!!
    //
    // - 1st argument is the key value : T = Top, B = Bottom, L = Left, R = Right
    //
    // - 2nd argument is the timemark on which the note has to appear
    //It's in BPM/4, which means that if you want to put a note at 
    //beggining of measure 3, you want to put 48 (3*4 BPM*4) as value for timemark
    //
    // - 3rd argument is to define if the note is played by computer or player
    //put false for computer, true for player

    var notes = [];

/*    notes.push( new Note('T', 0, false) );
    notes.push( new Note('B', 4, false) );
    notes.push( new Note('L', 8, false) );
    notes.push( new Note('R', 12, false) );
    
    notes.push( new Note('T', 16, true) );
    notes.push( new Note('B', 20, true) );
    notes.push( new Note('L', 24, true) );
    notes.push( new Note('R', 28, true) );*/
    var position = 0;
    var input = '';

    for (var i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            input = 'B';
        } else {
            input = 'T';
        }
        notes.push( new Note(input, position, false));
        position += 4;
    }

    return notes;
};

NoteManager.prototype.getNote = function(timeMark){
    for(var i=0; i<this.notes.length; i++){
        if(this.notes[i].time == timeMark){
            return this.notes[i];
        }
    }
    return null;
};