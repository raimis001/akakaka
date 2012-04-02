goog.provide('akakaka.sceneGame');

akakaka.sprites = {
  mirror:{
    img:'sp_mirror.png',
    caption:'Spogulis',
    note:'Tev l\u012bdz\u012bgs izskats ir piere\u0123istr\u0113ts un aizsarg\u0101ts ar autorties\u012bb\u0101m.',
    note1:'un spogu\u013ca konfisk\u0101cija',
    price:25,
    active:true,
    x:41, 
    y:219
  },
  poster:{
    img:'sp_poster.png',
    img1:'sp_poster1.png',
    caption:"Plak\u0101ts",
    note:'\u0160is ir p\u0101rvietojams att\u0113ls, kur\u0101 ir potenci\u0101li publiski redzams ar autorties\u012bb\u0101m aizsarg\u0101ta sabiedr\u012bb\u0101 atpaz\u012bstama persona.',
    note1:'un att\u0113la atpaz\u012bstam\u012bbas nov\u0113r\u0161ana.',
    price:5,
    active:true,
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
    caption:'Ko\u0161\u013cenes',
    note:'Uz \u0161o objektu neattiecas nek\u0101di likump\u0101rk\u0101pumi.',
    note1:'Netiek piem\u0113roti nek\u0101di soda m\u0113ri.',
    price:0,
    active:true,
    x:364, 
    y:472
  },
  magazines:{
    img:'sp_magazines.png',
    img1:'sp_magazines1.png',
    caption:'\u017durn\u0101li',
    note:'Ar autorties\u012bb\u0101m aizsarg\u0101ts materi\u0101ls, kuru var publiski deklam\u0113t vai nesankcion\u0113ti patapin\u0101t.',
    note1:'un kaitniecisk\u0101s darb\u012bbas avota sadedzin\u0101\u0161ana.',
    price:10,
    active:true,
    x:624, 
    y:564
  },
  bed:{
    img:'sp_bed.png',
    img1:'sp_bed1.png',
    caption:'Gulta',
    note:'Lok\u0101cija, kur\u0101 var pavairot potenci\u0101los autorties\u012bbu p\u0101rk\u0101p\u0113jus.',
    note1:'par katru jauno eksempl\u0101ru.',
    price:125,
    active:true,
    x:580, 
    y:478
  },
  baznica:{
    img:'sp_church.png',
    img1:'sp_church1.png',
    caption:'Bazn\u012bca',
    note:'Bazn\u012bcas spredi\u0137\u012b var b\u016bt atsauces uz ar autorties\u012bb\u0101m aizsarg\u0101tiem materi\u0101liem. Rekomend\u0113jam publisko pas\u0101kumu ierobe\u017eo\u0161anu.',
    note1:'Bazn\u012bcas publisko pas\u0101kumu ierobe\u017eo\u0161ana.',
    price:0,
    active:true,
    parent:'glass',
    x:445, 
    y:95
  },
  akmens:{
    img:'sp_grave.png',
    img1:'sp_grave1.png',
    caption:'Kapakme\u0146i',
    note:'Identific\u0113ts, ka piemi\u0146as teksti uz kapakme\u0146iem satur ar autorties\u012bb\u0101m aizsarg\u0101tus materi\u0101lus.',
    note1:'Likvid\u0113t likumu p\u0101rk\u0101pu\u0161os objektu laukumus.',
    price:0,
    active:true,
    parent:'glass',
    x:416, 
    y:235
  },
  zogs:{
    img:'sp_fence.png',
    img1:'sp_fence1.png',
    caption:'S\u0113ta',
    note:'Platforma, uz kuras var publiski demonstr\u0113t un izplat\u012bt ar autorties\u012bb\u0101m aizsarg\u0101tus materi\u0101lus.',
    note1:'un objekta likvid\u0101cija.',
    price:40,
    active:true,
    parent:'glass',
    x:265, 
    y:216
  },
  auto: {
    img:'sp_auto.png',
    caption:'Ma\u0161\u012bna',
    note:'L\u012bdzeklis, ar kuru var p\u0101rvad\u0101t datu nes\u0113jus, kuros var atrasties ar autorties\u012bb\u0101m aizsarg\u0101ti materi\u0101li.',
    note1:'un kaitniecisk\u0101 l\u012bdzek\u013ca konfisk\u0101cija.',
    price:105,
    active:true,
    parent:'glass',
    x:260, 
    y:260
  },
  glass:{
    img:'sp_glass.png',
    img1:'sp_glass1.png',
    caption:'Logs',
    note:'J\u016bsu dro\u0161\u012bbai, lai j\u016bs neapdraud\u0113tu likump\u0101rk\u0101p\u0113ja kaitniecisk\u0101s darb\u012bbas publiski demonstr\u0113jot ar autorties\u012bb\u0101m aizsarg\u0101tus materi\u0101lus, rekomend\u0113jam loga likvid\u0101ciju.',
    note1:'Objekta caurskat\u0101m\u012bbas nov\u0113r\u0161ana.',
    price:0,
    active:true,
    x:243, 
    y:57,
    need:['akmens','baznica','zogs','auto']
  },
  table:{
    img:'sp_table.png',
    x:243, 
    y:425
  },
  display:{
    img:'sp_display.png',
    caption:'Datora monitors',
    note:'Instruments, ar kura pal\u012bdz\u012bbu var tikt veikta ar autorties\u012bb\u0101m aizsarg\u0101tu Twittera kontu rakst\u012bt\u0101 retv\u012bto\u0161ana.',
    note1:'un kaitniecisk\u0101s ier\u012bces konfisk\u0101cija.',
    price:40,
    active:true,
    x:289, 
    y:338
  },
  keyboard:{
    img:'sp_keyb.png',
    caption:'Datora klaviat\u016bra',
    note:'L\u012bdzeklis, ar kuru var saglab\u0101t un pavairot ar autorties\u012bb\u0101m aizsarg\u0101tas idejas.',
    note1:'un kaitniecisk\u0101s ier\u012bces konfisk\u0101cija.',
    price:5,
    active:true,
    x:354, 
    y:435
  },
  flash:{
    img:'sp_flash.png',
    caption:'Zibatmi\u0146a',
    note:'Potenci\u0101ls ar autorties\u012bb\u0101m aizsarg\u0101tu materi\u0101lu datu nes\u0113js, par kuru nav samaks\u0101ts nodoklis.',
    note1:'un datu nes\u0113ja konfisk\u0101cija.',
    price:4,
    active:true,
    x:310, 
    y:449
  },
  pages:{
    img:'sp_pages.png',
    caption:'Pap\u012brs',
    note:'Potenci\u0101ls ar autorties\u012bb\u0101m aizsarg\u0101tu materi\u0101lu datu nes\u0113js, par kuru nav samaks\u0101ts nodoklis.',
    note1:'un datu nes\u0113ja konfisk\u0101cija.',
    price:1,
    active:true,
    x:246, 
    y:441
  },
  pencils:{
    img:'sp_pencil.png',
    caption:'Flom\u0101steri',
    note:'L\u012bdzeklis, kur\u0161 var tikt izmantots ar autorties\u012bb\u0101m aizsarg\u0101tu materi\u0101lu goda aizskar\u0161anai.',
    note1:'un konfisk\u0101cija.',
    price:2,
    active:true,
    x:529, 
    y:379
  },
  comp:{
    img:'sp_comp.png',
    caption:'Datora korpuss',
    note:'Pla\u0161a diapazona datu veidu nes\u0113js, kur\u0101 var tikt uzglab\u0101ti un pavairoti ar autorties\u012bb\u0101m aizsarg\u0101ti materi\u0101li.',
    note1:'L\u012bdzekl\u012b atrodamo materi\u0101lu nodo\u0161ana ekspertu anal\u012bzei, un to izp\u0113te neatkar\u012bgi no to priv\u0101tuma pak\u0101pes.',
    price:0,
    active:true,
    need:['toilet'],
    x:296, 
    y:510
  },
  toilet:{
    img:'sp_toilet.png',
    caption:'Tualetes pap\u012brs',
    note:'L\u012bdzeklis, kur\u0161 var tikt izmantots ar autorties\u012bb\u0101m aizsarg\u0101tu materi\u0101lu apdraud\u0113\u0161anai.',
    note1:'Sods netiek \u0161oreiz piem\u0113rots, bet l\u012bdzeklis tiek konfisc\u0113ts uz nenoteiktu laiku un nodots ekspertu grupas rok\u0101s.',
    price:0,
    active:true,
    parent:'comp',
    x:311, 
    y:484
  },
  hantel:{
    img:'sp_hantel.png',
    img1:'sp_hantel1.png',
    caption:'Hantele',
    note:'Visi vingrin\u0101jumu veidi ir re\u0123istr\u0113ti un pieejami tikai par abonentmaksu.',
    note1:'un oblig\u0101t\u0101 abon\u0113\u0161anas maksa',
    price:3,
    active:true,
    x:153, 
    y:580
  },
  rozete:{
    img:'sp_rozete.png',
    img1:'sp_rozete1.png',
    caption:'Rozete sien\u0101',
    note:'Datu nes\u0113ju uzl\u0101d\u0113\u0161anas ier\u012bce, ar kuras pal\u012bdz\u012bbu var tikt efekt\u012bv\u0101k izplat\u012bti ar autorties\u012bb\u0101m aizsarg\u0101ti materi\u0101li.',
    note1:'un ier\u012bces funkcionalit\u0101tes nov\u0113r\u0161ana l\u012bdz tiesas l\u0113mumam.',
    price:75,
    active:true,
    x:178, 
    y:520
  },
  poster1:{
    img:'sp_post1.png',
    img1:'sp_post11.png',
    caption:'Karti\u0146a pie sienas ar p\u0101rtiju',
    note:'\u0160is ir p\u0101rvietojams att\u0113ls, kur\u0101 ir ir potenci\u0101li publiski redzams ar autorties\u012bb\u0101m aizsarg\u0101ta piere\u0123istr\u0113ta pre\u010du z\u012bme.',
    note1:'un att\u0113la atpaz\u012bstam\u012bbas nov\u0113r\u0161ana.',
    price:7,
    active:true,
    x:168, 
    y:375
  },
  poster2:{
    img:'sp_post2.png',
    img1:'sp_post21.png',
    caption:'Karti\u0146a pie sienas ar m\u0101j\u0101m',
    note:'\u0160is ir p\u0101rvietojams att\u0113ls, kur\u0101 ir potenci\u0101li publiski redzams ar autorties\u012bb\u0101m aizsarg\u0101ts arhitekt\u016bras piemineklis.',
    note1:'un att\u0113la atpaz\u012bstam\u012bbas nov\u0113r\u0161ana.',
    price:5,
    active:true,
    x:186, 
    y:329
  },
  poster3:{
    img:'sp_post3.png',
    img1:'sp_post31.png',
    caption:'Karti\u0146a  pie sienas ar suni',
    note:'\u0160is ir p\u0101rvietojams att\u0113ls, kur\u0101 ir potenci\u0101li publiski redzams ar autorties\u012bb\u0101m aizsarg\u0101ta su\u0146a \u0161\u0137irne.',
    note1:'un att\u0113la atpaz\u012bstam\u012bbas nov\u0113r\u0161ana.',
    price:5,
    active:true,
    x:170, 
    y:290
  },
  pilow:{
    img:'sp_pilow.png',
    caption:'Spilvens',
    note:'L\u012bdzeklis, kur\u0161 var veicin\u0101t ar autorties\u012bb\u0101m aizsarg\u0101tu materi\u0101lu nosap\u0146o\u0161anu un p\u0113c tam publisku atst\u0101st\u012b\u0161u.',
    note1:'un potenci\u0101l\u0101 veicin\u0101t\u0101ja konfisk\u0101cija.',
    price:6,
    active:true,
    x:603, 
    y:461
  },
  sega:{
    img:'sp_sega.png',
    caption:'Sega',
    note:'L\u012bdzeklis, zem kura ir iesp\u0113jams pasl\u0113pt citus kaitnieciskos l\u012bdzek\u013cus.',
    note1:'un kaitniecisk\u0101 l\u012bdzek\u013ca konfisk\u0101cija.',
    price:14,
    x:621, 
    y:490
  },
  shirt:{
    img:'sp_shirt.png',
    img1:'sp_shirt1.png',
    caption:'Krekls',
    note:'Potenci\u0101la vieta, kur izr\u0101d\u012bt publiski ar autorties\u012bb\u0101m aizsarg\u0101tus att\u0113lus vai tekstus.',
    note1:'un kaitniecisk\u0101 l\u012bdzek\u013ca konfisk\u0101cija.',
    price:60,
    active:true,
    x:709, 
    y:506
  },
  planshet:{
    img:'sp_planshet.png',
    img1:'sp_planshet1.png',
    caption:'Telefons',
    note:'Pla\u0161a spektra noziegumus veicino\u0161s instruments. \u012apa\u0161i b\u012bstams.',
    note1:'un nekav\u0113jo\u0161a l\u012bdzek\u013ca likvid\u0101cija.',
    price:240,
    active:true,
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
    caption:'Ze\u0137es',
    note:'Uz \u0161o objektu neattiecas nek\u0101di likump\u0101rk\u0101pumi.',
    note1:'Netiek piem\u0113roti nek\u0101di soda m\u0113ri.',
    price:0,
    active:true,
    x:602, 
    y:632
  },
  notes:{
    img:'sp_notes.png',
    caption:'L\u012bmlapi\u0146as',
    note:'Materi\u0101ls, uz kura iesp\u0113jams pavairotas ar autorties\u012bb\u0101m aizsarg\u0101tas idejas. Nepiecie\u0161ama ekspert\u012bzes anal\u012bze gal\u0113jam sl\u0113dzienam.',
    note1:'Sods netiek \u0161oreiz piem\u0113rots, bet l\u012bdzeklis tiek konfisc\u0113ts uz nenoteiktu laiku un nodots ekspertu grupas rok\u0101s.',
    price:0,
    active:true,
    x:772, 
    y:419
  },
  discs:{
    img:'sp_discs.png',
    caption:'CD',
    note:'Potenci\u0101ls ar autorties\u012bb\u0101m aizsarg\u0101tu materi\u0101lu datu nes\u0113js, par kuru nav samaks\u0101ts nodoklis.',
    note1:'un datu nes\u0113ja konfisk\u0101cija.',
    price:4,
    active:true,
    x:884, 
    y:391
  },
  camera:{
    img:'sp_camera.png',
    img1:'sp_camera1.png',
    caption:'Videokamera',
    note:'Datu nes\u0113js ar sabiedr\u012bbu apdraudo\u0161u datu fiks\u0113\u0161anas un pavairo\u0161anas funkcionalit\u0101ti.',
    note1:'un kaitniecisk\u0101 l\u012bdzek\u013ca likvid\u0101cija.',
    price:210,
    active:true,
    x:798, 
    y:358
  },
  casetes:{
    img:'sp_casetes.png',
    caption:'Kasetes',
    note:'\u0160ie m\u0101jas apst\u0101k\u013cos film\u0113to int\u012bma rakstura video materi\u0101li var satur\u0113t ar autorties\u012bb\u0101m aizsarg\u0101tu ska\u0146as un pozas. Rekomend\u0113ts nodot ekspertu anal\u012bzei.',
    note1:'Sods netiek \u0161oreiz piem\u0113rots, bet l\u012bdzeklis tiek konfisc\u0113ts uz nenoteiktu laiku un nodots ekspertu grupas rok\u0101s.',
    price:0,
    active:true,
    x:840, 
    y:384
  },
  book:{
    img:'sp_book.png',
    caption:'Gr\u0101mata',
    note:'Ar autorties\u012bb\u0101m aizsarg\u0101ts materi\u0101ls, kuru var publiski deklam\u0113t vai nesankcion\u0113ti patapin\u0101t.',
    note1:'un kaitniecisk\u0101s darb\u012bbas avota sadedzin\u0101\u0161ana.',
    price:10,
    active:true,
    x:872, 
    y:327
  },
  radio:{
    img:'sp_radio.png',
    img1:'sp_radio1.png',
    caption:'Radio',
    note:'Sabiedr\u012bbu apdraudo\u0161s l\u012bdzeklis, ar kuru var publiski izplat\u012bt ar autorties\u012bb\u0101m aizsarg\u0101tus materi\u0101lus.',
    note1:'un kaitniecisk\u0101 l\u012bdzek\u013ca likvid\u0101cija.',
    price:110,
    active:true,
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
    caption:'Bikses',
    note:'Bik\u0161u kabatas var kalpot k\u0101 pal\u012bgl\u012bdzeklis, lai nog\u0101d\u0101tu datu nes\u0113jus, kuros atrodas ar autorties\u012bb\u0101m aizsarg\u0101ti materi\u0101li, uz nozieguma vietu.',
    note1:'un kaitniecisk\u0101 l\u012bdzek\u013ca konfisk\u0101cija.',
    price:8,
    active:true,
    x:476, 
    y:409
  },
  curtain:{
    img:'sp_curtain.png',
    x:220, 
    y:57
  }
};
akakaka.sceneGame = function() {
  lime.Scene.call(this); 
  
  akakaka.MONEY = 0;
  
  this.background = new lime.Layer();
  
  
  var back = new lime.Sprite()
    .setFill(new lime.fill.Image('media/images/aka_bg.png'))
    .setAnchorPoint(0,0)
  ;
 
  this.background.appendChild(back);
  
  this.sprites = new lime.Layer();
  this.popup = new lime.Layer();
  
  var sprite, sp, pos;
  for (var s in akakaka.sprites) {
    sp = akakaka.sprites[s];
    pos = new goog.math.Coordinate(sp.x, sp.y);
    //console.log(pos);
    
    sprite = new lime.Sprite()
      .setAnchorPoint(0,0)
      .setPosition(pos)
      .setFill('media/images/' + sp.img)
    ;
    if (sp.img1) sprite.setFill('media/images/' + sp.img1);
    sprite.setFill('media/images/' + sp.img)
    
    sprite.sp_id  = s;
    if (sp.active) {
      sprite.active = true;
      goog.events.listen(sprite, ['mousedown', 'touchstart'], this.itemsClick, true, this);
    }
    this.sprites.appendChild(sprite);
  }
  
  this.appendChild(this.background);
  this.appendChild(this.sprites);
  
  this.appendChild(this.popup);
  
  this.hud = new lime.Layer()
    .setAnchorPoint(0,0)
  
  this.money = new akakaka.panelMoney();
  this.hud.appendChild(this.money);
  
  this.appendChild(this.hud);
  
}
goog.inherits(akakaka.sceneGame, lime.Scene);

akakaka.sceneGame.prototype.findObject = function(spId) {
  var sp;
  for (var s in akakaka.sprites) {
    sp = akakaka.sprites[s];
    if (s == spId) return sp;
  }  
  return null;
}

akakaka.sceneGame.prototype.itemsClick = function(e) {
  var target = e.currentTarget;
  //target.sp_id
  var sp = this.findObject(target.sp_id);
  
  if (sp.parent) {
    var pr = this.findObject(sp.parent);
    if (pr) {
      var idx = pr.need.indexOf(target.sp_id);
      if (idx > -1) {
        console.log('delete need ' + idx);
        pr.need.splice(idx,1);
      }
      
      //console.log(pr.need.indexOf('baznica'));
    }
  }
  if ((sp.need) && (sp.need.length) ) {
    console.log(sp.need);
    return;
  }
  if ((!sp) || (!target.active)) return;
  
  e.event.stopPropagation();
  
  var t = this;
  e.swallow(['mouseup','touchend'],function(e){
    if (target.hitTest(e)) {
      //console.log(t);
      
      var pop = new akakaka.panelPopup(target.sp_id);
      t.popup.appendChild(pop);
      
      goog.events.listen(pop, "close_panel", function(e){
        t.popup.removeChild(pop);
        
        if (sp.img1)
          target.setFill('media/images/' + sp.img1)
          else target.setHidden(true);
          
        target.active = false;
        goog.events.removeAll(target);
        
        if (sp.price) akakaka.MONEY += sp.price;
        t.money.setMoney(akakaka.MONEY);
        
      });
      
      
      
      //target.setHidden(true);
    }
  }, true, this);
}



