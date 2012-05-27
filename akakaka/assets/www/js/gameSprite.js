(function (window)
{
    gameSprite.prototype = new Container();
    function gameSprite(id)
    {
        var THIS = this;
        THIS.super_initialize = gameButton.prototype.initialize; //unique to avoid overiding base class
        
        THIS.id     = null;
        THIS.image  = null;
        
        THIS.initialize = function (id)
        {
          THIS.super_initialize();

          THIS.id = id;

          THIS.x = sprites[THIS.id].x;
          THIS.y = sprites[THIS.id].y;

          THIS.image = images[THIS.id].bitmap;
          THIS.addChild(THIS.image);
          
          if (sprites[THIS.id].active && (!sprites[THIS.id].need))  THIS.onClick = onClick;
        }
        THIS.checkParent = function() {
          console.log('set click')
          THIS.onClick = onClick;
        }
        var onClick = function (evt) {
          //e.nativeEvent.stopPropagation();
          THIS.onClick = null;
          
          THIS.removeChild(THIS.image);
          if (sprites[THIS.id].img1) {
            THIS.image = images[THIS.id + '_1'].bitmap;
            THIS.addChild(THIS.image);
          }
          
          if (sprites[THIS.id].parent) {
            var i = sprites[sprites[THIS.id].parent].need.indexOf(THIS.id);
            if (i > -1) sprites[sprites[THIS.id].parent].need.splice(i,1);
            console.log(sprites[sprites[THIS.id].parent].need);
            
            if (!sprites[sprites[THIS.id].parent].need.length) {
              sprites[sprites[THIS.id].parent].sprite.checkParent();
            }
            
          }
          
          //THIS.parent.doClick(THIS.id);
        }
        
        THIS.initialize(id);
    }
    window.gameSprite = gameSprite;
} (window));

