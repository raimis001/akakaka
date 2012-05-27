(function (window)
{
    gameScene.prototype = new Container();
    function gameScene()
    {
        var THIS = this;
        THIS.super_initialize = gameScene.prototype.initialize; //unique to avoid overiding base class
        
        
        THIS.initialize = function ()
        {
          THIS.super_initialize();
          
          THIS.addChild(images["aka_bg"].bitmap);

          for (var s in sprites) {
            sprites[s].sprite = new gameSprite(s);
            THIS.addChild(sprites[s].sprite);
          }          

          THIS.x = 960;//canvas.width;
          Tween.get(THIS).to({x: 0}, 1600, Ease.backOut);
          
        }
        //console.log(THIS.getObjectsUnderPoint(evt.stageX,evt.stageY));
        THIS.doClick = function(sprite_id) {
          console.log('Clicked:' + sprite_id);
          
          for (var s in sprites) {
            if (sprites[s].parent == sprite_id) {
              console.log('Parent found');
            }
          }
        }
        
        THIS.initialize();
    }
    window.gameScene = gameScene;
} (window));

