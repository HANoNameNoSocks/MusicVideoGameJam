function InputManager() {
    this.mappers = [];
    this.inputType = 'keyboard';
    this._init();
};

InputManager.prototype.resetInputs = function() {
    this.inputs = {
        // title screen
        start : false,

        // game
        up : false,
        down : false,
        left : false,
        right : false,

        // score screen
        restart : false
    };
};

InputManager.prototype._init = function() {
    this.resetInputs();

    var me = this;
    window.addEventListener("gamepadconnected", function(e) {
        me.inputType = 'gamepad';
        me.mappers['gamepad'] = new GamepadMapper();
        me.mappers['gamepad'].mapGameEvents();
    });

    window.addEventListener("keypress", function(e) {
        me.inputType = 'keyboard';
        me.mappers['keyboard'] = new KeyboardMapper();
        me.mappers['keyboard'].mapGameEvents();
    });
};















