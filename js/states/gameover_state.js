function GameOverState() {
    this.background = ASSET_MANAGER.getCrop("gameover");
};

GameOverState.prototype.update = function() {
    this.background.render(0, 0);

    if (INPUT_MANAGER.inputs.restart) {
        STATE_MANAGER.switchToState("title");
    }
};

GameOverState.prototype.reset = function() {
};