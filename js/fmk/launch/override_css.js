overrideCSS = function() {
    // center the canvas depending on viewport height
    addMarginTopToCanvas();
};

addMarginTopToCanvas = function() {
    if (window.innerHeight !== undefined) {
        var canvasMarginTop = (window.innerHeight - CANVAS_HEIGHT) / 2 + 'px';
        document.getElementById('game_canvas').style.marginTop = canvasMarginTop;
    }
};