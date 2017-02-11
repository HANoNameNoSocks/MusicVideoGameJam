function TitleState() {
    this.background = ASSET_MANAGER.getCrop("title");
};

TitleState.prototype.update = function() {
    this.background.render(0, 0);

    var me = this;
    addEventListener("keyup", function (e) {
        STATE_MANAGER.switchToState("game");
    }, false);
};

TitleState.prototype.reset = function() {
    // body
};