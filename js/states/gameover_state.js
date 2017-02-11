function GameOverState() {
    this.background = ASSET_MANAGER.getCrop("gameover");
};

GameOverState.prototype.update = function() {
    this.background.render(0, 0);

    var me = this;
    addEventListener("keyup", function (e) {
        STATE_MANAGER.switchToState("game");
    }, false);
};

GameOverState.prototype.reset = function() {
};