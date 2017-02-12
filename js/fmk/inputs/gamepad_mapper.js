GamepadMapper = function() {
    this.gamepad = new Gamepad();
};

GamepadMapper.prototype.mapGameEvents = function() {
    this.gamepad.on('press', 'button_1', function(e) {
        INPUT_MANAGER.inputs.start = true;
        INPUT_MANAGER.inputs.restart = true;
        INPUT_MANAGER.inputs.down = true;
    });

    this.gamepad.on('press', 'button_2', function(e) {
        INPUT_MANAGER.inputs.right = true;
    });

    this.gamepad.on('press', 'button_3', function(e) {
        INPUT_MANAGER.inputs.left = true;
    });

    this.gamepad.on('press', 'button_4', function(e) {
        INPUT_MANAGER.inputs.up = true;
    });
};