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

    var notes = [];

    notes.push( new Note('T', 0) );
    notes.push( new Note('B', 4) );
    notes.push( new Note('L', 8) );
    notes.push( new Note('R', 12) );

    console.log("NOTES LOADED");
    for(var i=0; i<notes.length; i++){
        console.log(notes[i].value+notes[i].time);
    }

    return notes;
}