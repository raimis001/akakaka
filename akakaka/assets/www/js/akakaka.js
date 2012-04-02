//set main namespace
goog.provide('akakaka');

goog.require('lime.Director');
goog.require('lime.Layer');
goog.require('lime.scheduleManager');

goog.require('lime.animation.Spawn');
goog.require('lime.animation.FadeTo');
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.MoveTo');
goog.require('lime.animation.Easing');
goog.require('lime.animation.RotateBy');

goog.require('lime.transitions.SlideInDown');
goog.require('lime.transitions.SlideInUp');
goog.require('lime.transitions.SlideInRight');

goog.require('lime.fill.Frame');
goog.require('lime.fill.Image');

goog.require('lime.Sprite');
goog.require('lime.GlossyButton');
goog.require('lime.Circle');
goog.require('lime.RoundedRect');
goog.require('lime.Label');


goog.require('goog.math');

goog.require('akakaka.sceneIntro');
goog.require('akakaka.sceneGame');
goog.require('akakaka.panelPopup');
goog.require('akakaka.panelMoney');


akakaka.WIDTH = 960;
akakaka.HEIGHT  = 680;

akakaka.start = function(){
  
  
	akakaka.director = new lime.Director(document.getElementById("context-game"),akakaka.WIDTH,akakaka.HEIGHT);
	akakaka.director.makeMobileWebAppCapable();
  
  akakaka.game  = new akakaka.sceneGame();
  akakaka.intro = new akakaka.sceneIntro();
	akakaka.director.replaceScene(akakaka.intro);
  
  
}

akakaka.beginGame = function() {
	akakaka.director.replaceScene(akakaka.game, lime.transitions.SlideInRight);
};

akakaka.endGame = function() {
  if (taptrain.director.getCurrentScene() == akakaka.intro) {
    return true;
  } else {
    return false;
  }
};

goog.exportSymbol('akakaka.start', akakaka.start);
