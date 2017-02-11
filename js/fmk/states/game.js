function Game() {
    this.background = ASSET_MANAGER.getCrop("background");
};

Game.prototype.update = function() {
    this.background.render(0, 0);

    var me = this;
    addEventListener("keyup", function (e) {
        STATE_MANAGER.switchToState("gameover");
    }, false);
};

Game.prototype.reset = function() {
};