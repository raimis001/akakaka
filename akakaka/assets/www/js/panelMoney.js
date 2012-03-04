goog.provide('akakaka.panelMoney');

akakaka.panelMoney = function() {
  lime.Sprite.call(this);
  
  this
    .setAnchorPoint(0,0)
    .setPosition(10,10)
    .setFill('media/images/pn_money.png')
    
  this.money = new lime.Label()
    .setText("0 LVL")
    .setAnchorPoint(0,0)
    .setPosition(44,20)
    .setAlign('right')
    .setSize(100,50)
    .setFontColor("#FFFFFF")
    .setFontSize(14)
    .setFontWeight("bold")
    
    
  this.appendChild(this.money);
  
}

goog.inherits(akakaka.panelMoney, lime.Sprite);

akakaka.panelMoney.prototype.setMoney = function(vMoney) {
  this.money.setText(vMoney + ' LVL');
}