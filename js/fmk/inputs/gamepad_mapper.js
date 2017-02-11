GamepadMapper = function() {
    this.gamepad = new Gamepad();
};

GamepadMapper.prototype.mapGameEvents = function() {
    this.gamepad.on('press', 'button_1', function(e) {
        INPUT_MANAGER.inputs.win = true;
        INPUT_MANAGER.inputs.start = true;
        INPUT_MANAGER.inputs.restart = true;

    });
};