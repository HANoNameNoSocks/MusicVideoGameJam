function Logger() {
};

Logger.prototype.log = function log(str) {
    if (DEBUG_ENABLED) {
        console.log(str);
    }
};