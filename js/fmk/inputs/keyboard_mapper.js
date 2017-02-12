KeyboardMapper = function() {
};

KeyboardMapper.prototype.mapGameEvents = function() {

    addEventListener("keydown", function (e) {
        LOGGER.log("keydown : " + e.keyCode)
        INPUT_MANAGER.inputs.start = true;
        INPUT_MANAGER.inputs.restart = true;

        switch (e.keyCode) {
            case 37 : INPUT_MANAGER.inputs.left = true; break;
            case 38 : INPUT_MANAGER.inputs.up = true; break;
            case 39 : INPUT_MANAGER.inputs.right = true; break;
            case 40 : INPUT_MANAGER.inputs.down = true; break;
        }
    }, false);

    addEventListener("keyup", function (e) {
        LOGGER.log("keyup : " + e.keyCode)
        INPUT_MANAGER.inputs.start = true;
        INPUT_MANAGER.inputs.restart = true;
    }, false);
};