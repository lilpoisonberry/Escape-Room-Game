console.log("preload start...");
var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}
preload(
  "images/backtuah.png",
  "images/clockbacktuah.png",
  "images/clocktuah.png",
  "images/colon.png",
  "images/cropdesk.png",
  "images/desk1back.png",
  "images/desk1bg.png",
  "images/desk2bg.png",
  "images/desk3bg.png",
  "images/download.png",
  "images/finalclassreal.jpg",
  "images/iVent.png",
  "images/key.png",
  "images/openVent.png",
  "images/origdesk.png",
  "images/puzzleclock.png",
  "images/secretpic.jpg",
  "images/ventgate.png",
  "images/closeDoorModal1.png",
  "images/closeDoorModal2.png",
  "images/closeDoorModal3.png",
  "images/closeDoorModal4.png",
  "images/numbers/1.png",
  "images/numbers/2.png",
  "images/numbers/3.png",
  "images/numbers/4.png",
  "images/numbers/5.png",
  "images/numbers/6.png",
  "images/numbers/7.png",
  "images/numbers/8.png",
  "images/numbers/9.png",
  "images/numbers/10.png",
  "images/numbers/11.png",
  "images/numbers/12.png",
  "SFX/boom.mp3",
  "SFX/doll_VL.mp3",
  "SFX/doorCreak.mp3",
  "SFX/Drawer_close.mp3",
  "SFX/Drawer_open.mp3",
  "SFX/ERIC_GIVE_ME_A_4.mp3",
  "SFX/keyjingle.mp3",
  "SFX/lockSFX.mp3",
  "SFX/scary_sounds-ambience.mp3",
  "SFX/scarySong.mp3",
  "SFX/tick.mp3",
  "SFX/ticktick.mp3",
  "SFX/ventMove.mp3",
  "SFX/ventOpenSFX.mp3"
);

console.log("preload finish...");
