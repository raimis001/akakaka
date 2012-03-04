goog.provide('akakaka.sceneIntro');

akakaka.sceneIntro = function() {
  lime.Scene.call(this);
  
  var layer = new lime.Layer()
    .setPosition(akakaka.WIDTH * 0.5,akakaka.HEIGHT * 0.5)
  ;
  var back = new lime.Sprite()
    .setFill(new lime.fill.Image('media/images/aka_st.png'))
  ;
  layer.appendChild(back);
 
  var bt_start = new lime.Sprite()
    .setFill(new lime.fill.Image('media/images/bt_game.png'))
  ;
  var button = new lime.Button(bt_start)
    .setPosition(-150,250)
  
  layer.appendChild(button);
  
  goog.events.listen(button, lime.Button.Event.CLICK, function() {
    
    akakaka.beginGame();
  });


  this.appendChild(layer);
  
  console.log('Intro scene :' + akakaka.WIDTH + "x" + akakaka.HEIGHT)
}
goog.inherits(akakaka.sceneIntro, lime.Scene);



