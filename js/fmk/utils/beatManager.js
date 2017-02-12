function BeatManager(){
    this.beatCounter==0;
    this.durationBetweenTwoBeat = (60 / BPM / 4) * 1000;
    this.timeAtLastBeat;
    this.counter = this.durationBetweenTwoBeat;
}

BeatManager.prototype.isOnBeat = function() {
    if(this.counter >= this.durationBetweenTwoBeat){
        //BEAT HAPPENED
        console.log("BEAT AT : " + this.counter + " / "+ this.durationBetweenTwoBeat);
        this.counter= this.counter - this.durationBetweenTwoBeat;
        this.timeAtLastBeat = Date.now();
        return true;
    }
    else{
        this.counter = Date.now() - this.timeAtLastBeat;
        return false;
    }

};   
