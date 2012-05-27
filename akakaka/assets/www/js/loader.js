(function (window)
{
    Loader.prototype = new Container();
    function Loader()
    {
        var THIS = this;
        THIS.super_initialize = Loader.prototype.initialize; //unique to avoid overiding base class

        // public properties:
        THIS.bar = new Shape();
        
        
        var loaderColor = Graphics.getRGB(255,255,255);
        var loaderWidth = 200;
        var loaderHeight = 30;
        //constructor:
        THIS.initialize = function ()
        {
            THIS.super_initialize();
            
            var bgBar = new Shape();
            bgBar.graphics.setStrokeStyle(1);
            bgBar.graphics.beginStroke(loaderColor);
            bgBar.graphics.drawRect(-2, -2, loaderWidth + 4, loaderHeight + 4);
            THIS.addChild(bgBar);
            
            
            THIS.bar.graphics.beginFill(loaderColor);
            THIS.bar.graphics.drawRect(0, 0, 1, loaderHeight);
            THIS.bar.graphics.endFill();
            THIS.addChild(THIS.bar);
            
            THIS.x = 380;
            THIS.y = 620;
        }

        // public methods:
        THIS.progress = function (prog) {
          THIS.bar.scaleX = (prog*100)*(loaderWidth/100);
          stage.update();
        }

        THIS.initialize();
    }
    window.Loader = Loader;
} (window));


