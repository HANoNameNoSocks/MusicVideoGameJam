function ArrowPad(player){
    this.y = 50;
    if(player){
        this.x = 300;
    }
    else{
        this.x = 50;
    }

    this.topArrow = new Arrow(this.x+ARROW_WIDTH, this.y);
    this.bottomArrow = new Arrow(this.x+ARROW_WIDTH, this.y+2*ARROW_HEIGHT);
    this.leftArrow = new Arrow(this.x, this.y+ARROW_HEIGHT);
    this.rightArrow = new Arrow(this.x+ 2*ARROW_WIDTH, this.y + ARROW_HEIGHT);
}