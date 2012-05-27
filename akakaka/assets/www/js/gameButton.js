(function (window)
{
    gameButton.prototype = new Container();
    function gameButton(bitmap)
    {
        var THIS = this;
        THIS.super_initialize = gameButton.prototype.initialize; //unique to avoid overiding base class
        
        THIS.image = null;
        
        THIS.initialize = function (bitmap)
        {
            THIS.super_initialize();
            THIS.image = bitmap;
            console.log(THIS.image.image.width);
            
            THIS.image.x = -THIS.image.image.width * 0.5;
            THIS.addChild(THIS.image);
        }
        
        THIS.onMouseOver = function (e)
        {
            THIS.scaleX = THIS.scaleY = 1.02;
            update = true;
        }        
        THIS.onMouseOut = function (e)
        {
            THIS.scaleX = THIS.scaleY = 1;
            update = true;
        }        
        
        THIS.initialize(bitmap);
    }
    window.gameButton = gameButton;
} (window));
