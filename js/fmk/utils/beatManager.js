function BeatManager(){
    this.durationBetweenTwoBeat = (60 / BPM / 4) * 1000;
    this.timeAtLastBeat;
    this.counter = this.durationBetweenTwoBeat;
}

BeatManager.prototype.isOnBeat = function() {
    if(this.counter >= this.durationBetweenTwoBeat){
        //BEAT HAPPENED
        this.counter=0;
        this.timeAtLastBeat = Date.now();
        return true;
    }
    else{
        this.counter = Date.now() - this.timeAtLastBeat;
        return false;
    }

};   
