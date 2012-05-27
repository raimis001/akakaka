goog.provide('akakaka.panelPopup');

akakaka.panelPopup = function(vObject) {
  lime.Sprite.call(this); 
  
  console.log(akakaka.sprites[vObject]);
  
  var t = this;
  
  var overlay = new lime.RoundedRect()
    .setSize(akakaka.WIDTH, akakaka.HEIGHT)
    .setAnchorPoint(0,0)
    .setPosition(0,0)
    .setFill('#333333')
    .setOpacity(0.1)
  ; 
  this.appendChild(overlay);
  
  goog.events.listen(overlay, ['mousedown', 'touchstart'], function(e) {
    e.event.stopPropagation();
  });
  
  
  var panel = new lime.Sprite()
    .setPosition(akakaka.WIDTH * 0.5 , akakaka.HEIGHT + 200)
    .setFill('media/images/popup.png')
  ;
  
  var label;
  if (akakaka.sprites[vObject].note) {
    label = new lime.Label()
      .setText(akakaka.sprites[vObject].note)
      .setSize(540,200)
      .setPosition(0,-30)
      .setFontSize(16)
      .setFontWeight("bold")
      .setFontColor('#FFFFFF')
     
    panel.appendChild(label);
  }

  if (akakaka.sprites[vObject].caption) {
    label = new lime.Label()
      .setText(akakaka.sprites[vObject].caption)
      .setSize(580,50)
      .setPosition(0,-140)
      .setFontSize(20)
      .setFontWeight("bold")
      .setFontColor('#FFFFFF')
     
    panel.appendChild(label);
  }

  if (akakaka.sprites[vObject].price) {
    
    var txt = '';
    if (akakaka.sprites[vObject].price > 0) txt = 'J\u0101maks\u0101: ' + akakaka.sprites[vObject].price + ' LVL sods ';
    if (akakaka.sprites[vObject].note1) txt = txt + akakaka.sprites[vObject].note1;
    
    label = new lime.Label()
      .setText(txt)
      .setSize(500,50)
      .setPosition(0,40)
      .setFontSize(20)
      .setFontWeight("bold")
      .setFontColor('#FFFFFF')
      .setAlign('center')
     
    panel.appendChild(label);
  }

  var bt_up = new lime.Sprite()
    .setFill('media/images/bt_pay.png')
  var button = new lime.Button(bt_up)
    .setPosition(0,120)

  
  panel.appendChild(button);

  goog.events.listen(button, lime.Button.Event.CLICK, function(e) {
    var move1  = new lime.animation.MoveTo(akakaka.WIDTH * 0.5 , - 200).setDuration(0.55).setEasing(lime.animation.Easing.LINEAR);
    panel.runAction(move1);
    goog.events.listen(move1, lime.animation.Event.STOP, function(){
      t.dispatchEvent({type: "close_panel"});
      console.log("Animation stopped")
    });      
  });
  
  this.appendChild(panel);
  
  var move  = new lime.animation.MoveTo(akakaka.WIDTH * 0.5 , akakaka.HEIGHT * 0.5).setDuration(0.55).setEasing(lime.animation.Easing.EASE);
  panel.runAction(move);
  
}

goog.inherits(akakaka.panelPopup, lime.Sprite);


