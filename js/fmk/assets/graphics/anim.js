function Anim(frames) {
    this.frames = frames;
    this.currentFrameIdx = 0;
    this.duration = 0;
    this.isOver = false;
};

Anim.prototype.play = function(canvasX, canvasY) {
    this.isOver = false;
    this.duration++;
    var currentFrame = this.frames[this.currentFrameIdx];

    if (this.duration > currentFrame.duration) {
        this.duration = 0;

        var isLastFrame = this.currentFrameIdx == this.frames.length -1;
        if (isLastFrame) {
            this.currentFrameIdx = 0;
        } else {
            this.currentFrameIdx++;
        }
    }

    currentFrame.render(canvasX, canvasY);
};

Anim.prototype.playOnce = function(canvasX, canvasY) {
    if (!this.isOver) {
        this.duration++;
        var currentFrame = this.frames[this.currentFrameIdx];

        if (this.duration > currentFrame.duration) {
            this.duration = 0;

            var isLastFrame = this.currentFrameIdx == this.frames.length -1;
            
            if (isLastFrame) {
                this.isOver = true;
            } else {
                this.currentFrameIdx++;
            }
        }
        currentFrame.render(canvasX, canvasY);
    }
};