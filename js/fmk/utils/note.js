function Note(value, time, forPlayer) {
    this.value = value;
    this.time = time;
    this.forPlayer = forPlayer;
    this.counterTime=0;
    this.active = false;
}

Note.prototype.update = function(){
    this.counterTime++;
    if( this.counterTime >= NOTE_DURATION){
        this.active = false;    
    }
}