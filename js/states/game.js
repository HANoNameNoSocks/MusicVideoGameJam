function Game() {
    this.background = ASSET_MANAGER.getCrop("background");
};

Game.prototype.update = function() {
    this.background.render(0, 0);

    if (INPUT_MANAGER.inputs.win) {
        STATE_MANAGER.switchToState("gameover");
    }
};

Game.prototype.reset = function() {
};