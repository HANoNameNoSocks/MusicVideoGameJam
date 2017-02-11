function Launcher() {
    CTX = null;
    LOGGER = null;
    ASSET_MANAGER = null;
    RENDERER = null;
    GAME = null;

    this._init();
};

durationBetweenTwoBeat = (60 / BPM / 4 )* 1000 ;
timeAtLastBeat = 0;
counter = durationBetweenTwoBeat;

Launcher.prototype.run = function() {
    if (ASSET_MANAGER.isReady) {
        if (GAME === null) {
            GAME = new Game();
            GAME.init();
        } else {
            if(counter >= durationBetweenTwoBeat){
                //BEAT HAPPENED
                console.log("BEAT ! "+counter);
                counter=0;
                timeAtLastBeat = Date.now();
                GAME.update(true);
            }
            else{
                console.log("COUNTER ! " +counter);
                counter = Date.now() - timeAtLastBeat;
                GAME.update(false);
            }
                RENDERER.render(); 

        }   
    }
    
    requestAnimationFrame(LAUNCHER.run);
};

Launcher.prototype._init = function() {
    this._initTools();
    this._initCanvas();
    this._load();
};

Launcher.prototype._load = function() {
    ASSET_MANAGER.load();

};

Launcher.prototype._initTools = function() {
    LOGGER = new Logger();
    RENDERER = new Renderer();
    ASSET_MANAGER = new AssetManager();
};

Launcher.prototype._initCanvas = function() {
    LOGGER.log("Initializing canvas");

    var canvas = document.createElement("canvas");
    canvas.setAttribute("id", "game_canvas");

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    CTX = canvas.getContext(CANVAS_CONTEXT);

    document.body.appendChild(canvas);
    this._manageCrossBrowser();
    this._overrideCSS();
};

Launcher.prototype._manageCrossBrowser = function() {
    var w = window;
    requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || 
        w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
};

Launcher.prototype._overrideCSS = function() {
    overrideCSS();
}