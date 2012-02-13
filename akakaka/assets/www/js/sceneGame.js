goog.provide('akakaka.sceneGame');

akakaka.sprites = {
  mirror:{
    img:'sp_mirror.png',
    x:41, 
    y:219
  },
  poster:{
    img:'sp_poster.png',
    x:800, 
    y:68
  },
  shelf:{
    img:'sp_shelf.png',
    x:758, 
    y:316
  },
  gumm:{
    img:'sp_gumm.png',
    x:364, 
    y:472
  },
  table:{
    img:'sp_table.png',
    x:243, 
    y:425
  },
  display:{
    img:'sp_display.png',
    x:289, 
    y:338
  },
  keyboard:{
    img:'sp_keyb.png',
    x:354, 
    y:435
  },
  flash:{
    img:'sp_flash.png',
    x:310, 
    y:449
  },
  pages:{
    img:'sp_pages.png',
    x:246, 
    y:441
  },
  pencils:{
    img:'sp_pencil.png',
    x:529, 
    y:379
  },
  comp:{
    img:'sp_comp.png',
    x:296, 
    y:510
  },
  toilet:{
    img:'sp_toilet.png',
    x:311, 
    y:484
  },
  hantel:{
    img:'sp_hantel.png',
    x:153, 
    y:580
  },
  rozete:{
    img:'sp_rozete.png',
    x:178, 
    y:520
  },
  poster1:{
    img:'sp_post1.png',
    x:178, 
    y:392
  },
  poster2:{
    img:'sp_post2.png',
    x:193, 
    y:349
  },
  poster3:{
    img:'sp_post3.png',
    x:182, 
    y:308
  },
  curtain:{
    img:'sp_curtain.png',
    x:220, 
    y:57
  },
  magazines:{
    img:'sp_magazines.png',
    x:624, 
    y:564
  },
  bed:{
    img:'sp_bed.png',
    x:580, 
    y:478
  },
  pilow:{
    img:'sp_pilow.png',
    x:603, 
    y:461
  },
  sega:{
    img:'sp_sega.png',
    x:621, 
    y:490
  },
  shirt:{
    img:'sp_shirt.png',
    x:709, 
    y:506
  },
  planshet:{
    img:'sp_planshet.png',
    x:679, 
    y:503
  },
  slazds:{
    img:'sp_slazds.png',
    x:877, 
    y:644
  },
  sock:{
    img:'sp_sock.png',
    x:602, 
    y:632
  },
  notes:{
    img:'sp_notes.png',
    x:772, 
    y:419
  },
  discs:{
    img:'sp_discs.png',
    x:884, 
    y:391
  },
  camera:{
    img:'sp_camera.png',
    x:798, 
    y:358
  },
  casetes:{
    img:'sp_casetes.png',
    x:840, 
    y:384
  },
  book:{
    img:'sp_book.png',
    x:872, 
    y:327
  },
  radio:{
    img:'sp_radio.png',
    x:788, 
    y:273
  },
  chair:{
    img:'sp_chair.png',
    x:390, 
    y:417
  },
  bikses:{
    img:'sp_bikses.png',
    x:476, 
    y:409
  }
};

akakaka.sceneGame = function() {
  lime.Scene.call(this); 
  
  var back = new lime.Sprite()
    .setFill(new lime.fill.Image('media/images/aka_bg.png'))
    .setAnchorPoint(0,0)
  ;
 
  this.appendChild(back);
  
  var sprite, img, sp, pos;
  for (var s in akakaka.sprites) {
    sp = akakaka.sprites[s];
    pos = new goog.math.Coordinate(sp.x, sp.y);
    //console.log(pos);
    
    img = new lime.fill.Image('media/images/' + sp.img);
    sprite = new lime.Sprite()
      .setAnchorPoint(0,0)
      .setPosition(pos)
      .setFill(img)
    ;
    sprite.sp_id = s;
    //goog.events.listen(sprite, ['mousedown', 'touchstart'], this.itemsClick, true, sprite);
    goog.events.listen(sprite, ['mousedown', 'touchstart'], function(e) {
      e.event.stopPropagation();
      var sprite = e.currentTarget;
      e.swallow(['mouseup','touchend'],function(e){
        if (sprite.hitTest(e)) {
          console.log(sprite);
          sprite.setHidden(true);
        }
      });
    }
    
    , true, sprite);
    
    this.appendChild(sprite);
  }
  
}
goog.inherits(akakaka.sceneGame, lime.Scene);

akakaka.sceneGame.prototype.itemsClick = function(e) {
  e.stopPropagation();
  console.log(e.currentTarget);
}


