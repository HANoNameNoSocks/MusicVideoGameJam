function TitleState() {
    this.background = ASSET_MANAGER.getCrop("title");
};

TitleState.prototype.update = function() {
    this.background.render(0, 0);

    if (INPUT_MANAGER.inputs.start) {
        STATE_MANAGER.switchToState("game");
    }
};

TitleState.prototype.reset = function() {
    // body
};