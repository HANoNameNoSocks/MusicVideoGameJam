KeyboardMapper = function() {
};

KeyboardMapper.prototype.mapGameEvents = function() {

    addEventListener("keyup", function (e) {
        INPUT_MANAGER.inputs.win = true;
        INPUT_MANAGER.inputs.start = true;
        INPUT_MANAGER.inputs.restart = true;
    }, false);
};