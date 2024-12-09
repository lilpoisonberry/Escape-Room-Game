var cv = document.getElementById("cover");
var ecv = document.getElementById("endCover");
var b1 = document.getElementById("dollModal");
var x = 0;
var y = 0;
var z = 0;
var x2 = 0;
var y2 = 0;
var z2 = 0;
var x3 = 0;
var y3 = 0;
var z3 = 0;
var x4 = 0;
var y4 = 0;
var z4 = 0;
var x5 = 0;
var y5 = 0;
var z5 = 0;
var s1 = 0;
var s2 = 0;
var s3 = 0;
var s4 = 0;
var s5 = 0;
var desk11 = 0;
var desk12 = 0;
var desk13 = 0;
var desk14 = 0;
var desk15 = 0;
var keys = 0;
var locks = 0;
var sd = 0;
var cd = 0;
var dVL = 0;
var eg = 0;

window.onload = function () {
  playBGMusic();
};
function cover() {
  if (window.innerHeight !== screen.height) {
    isPaused = true;
    cv.style.display = "flex";
  } else {
    isPaused = false;
    cv.style.display = "none";
  }
}

function playBGMusic() {
  var audio = document.getElementById("backAmbience");
  audio.volume = 0.4;
  audio.play();
}
function hideStartModal() {
  document.getElementById("startModal").style.display = "none";
  document.getElementById("backAmbience").play();
}

function showCModal() {
  document.getElementById("clockModal").style.display = "flex";
  document.getElementById("ticking").play();
}
function hideCModal() {
  document.getElementById("clockModal").style.display = "none";
  document.getElementById("ticking").pause();
}
function showD1Modal() {
  document.getElementById("desk1Modal").style.display = "flex";
  document.getElementById("dOpen").play();
}
function hideD1Modal() {
  document.getElementById("desk1Modal").style.display = "none";
  document.getElementById("dClose").play();
}
function showD2Modal() {
  document.getElementById("desk2Modal").style.display = "flex";
  document.getElementById("dOpen").play();
}
function hideD2Modal() {
  document.getElementById("desk2Modal").style.display = "none";
  document.getElementById("dClose").play();
}
function showD3Modal() {
  document.getElementById("desk3Modal").style.display = "flex";
  document.getElementById("dOpen").play();
}
function hideD3Modal() {
  document.getElementById("desk3Modal").style.display = "none";
  document.getElementById("dClose").play();
}
function showDoorModal() {
  document.getElementById("doorModal").style.display = "flex";
  document.getElementById("doorOpen").play();
}
function hideDoorModal() {
  document.getElementById("doorModal").style.display = "none";
  document.getElementById("doorOpen").play();
}
function showVentModal() {
  document.getElementById("ventModal").style.display = "flex";
  document.getElementById("ventMove").play();
}
function hideVentModal() {
  document.getElementById("ventModal").style.display = "none";
  document.getElementById("ventMove").play();
}
function showKeyModal() {
  document.getElementById("keyModal").style.display = "flex";
  document.getElementById("keyJingle").play();
}
function hideKeyModal() {
  document.getElementById("keyModal").style.display = "none";
}
function showKeyModal2() {
  document.getElementById("keyModal2").style.display = "flex";
  document.getElementById("keyJingle").play();
}
function hideKeyModal2() {
  document.getElementById("keyModal2").style.display = "none";
}
function showKeyModal3() {
  document.getElementById("keyModal3").style.display = "flex";
  document.getElementById("keyJingle").play();
}
function hideKeyModal3() {
  document.getElementById("keyModal3").style.display = "none";
}
function dollVL() {
  if (dVL == 0) {
    document.getElementById("dollVoice").play();
  } else if (dVL >= 1) {
    document.getElementById("dollVoiceCode").play();
  }
  dVL = dVL + 1;
}
function showSecretModal() {
  document.getElementById("secretModal").style.display = "flex";
  document.getElementById("secretSong").play();
}
function hideSecretModal() {
  document.getElementById("secretModal").style.display = "none";
}
function n1b1Scroll() {
  var image = document.getElementById("n1b1");
  if (z == 0) {
    image.src = "images/numbers/1.png";
    z++;
  } else if (z == 1) {
    image.src = "images/numbers/2.png";
    z++;
  } else if (z == 2) {
    image.src = "images/numbers/3.png";
    z++;
  } else if (z == 3) {
    image.src = "images/numbers/4.png";
    z++;
  } else if (z == 4) {
    image.src = "images/numbers/5.png";
    z++;
  } else if (z == 5) {
    image.src = "images/numbers/6.png";
    z++;
  } else if (z == 6) {
    image.src = "images/numbers/7.png";
    z++;
  } else if (z == 7) {
    image.src = "images/numbers/8.png";
    z++;
  } else if (z == 8) {
    image.src = "images/numbers/9.png";
    z++;
  } else if (z == 9) {
    image.src = "images/numbers/10.png";
    z++;
  } else if (z == 10) {
    image.src = "images/numbers/11.png";
    z++;
  } else {
    z = 0;
    image.src = "images/numbers/12.png";
  }
  document.getElementById("clockTick").play();
}
function n2b1Scroll() {
  var image = document.getElementById("n2b1");
  if (x == 0) {
    image.src = "images/numbers/1.png";
    x++;
  } else if (x == 1) {
    image.src = "images/numbers/2.png";
    x++;
  } else if (x == 2) {
    image.src = "images/numbers/3.png";
    x++;
  } else if (x == 3) {
    image.src = "images/numbers/4.png";
    x++;
  } else if (x == 4) {
    image.src = "images/numbers/5.png";
    x++;
  } else {
    x = 0;
    image.src = "images/numbers/0.png";
  }
  document.getElementById("clockTick").play();
}
function n3b1Scroll() {
  var image = document.getElementById("n3b1");
  if (y == 0) {
    image.src = "images/numbers/1.png";
    y++;
  } else if (y == 1) {
    image.src = "images/numbers/2.png";
    y++;
  } else if (y == 2) {
    image.src = "images/numbers/3.png";
    y++;
  } else if (y == 3) {
    image.src = "images/numbers/4.png";
    y++;
  } else if (y == 4) {
    image.src = "images/numbers/5.png";
    y++;
  } else if (y == 5) {
    image.src = "images/numbers/6.png";
    y++;
  } else if (y == 6) {
    image.src = "images/numbers/7.png";
    y++;
  } else if (y == 7) {
    image.src = "images/numbers/8.png";
    y++;
  } else if (y == 8) {
    image.src = "images/numbers/9.png";
    y++;
  } else {
    y = 0;
    image.src = "images/numbers/0.png";
  }
  document.getElementById("clockTick").play();
}
function tCheck1() {
  var a1 = document.getElementById("n1b1");
  var a2 = document.getElementById("n2b1");
  var a3 = document.getElementById("n3b1");
  var a4 = document.getElementById("colon1");
  if (x == 5 && z == 5 && y == 3) {
    a1.classList.add("opaque");
    a2.classList.add("opaque");
    a3.classList.add("opaque");
    a4.classList.add("opaque");
    a1.removeAttribute("onclick");
    a2.removeAttribute("onclick");
    a3.removeAttribute("onclick");
    document.getElementById("dBoom").play();
    desk11 = desk11 + 1;
    desk1WinCheck();
  }
  secretWinCheck();
}
function n1b2Scroll() {
  var image = document.getElementById("n1b2");
  if (z2 == 0) {
    image.src = "images/numbers/1.png";
    z2++;
  } else if (z2 == 1) {
    image.src = "images/numbers/2.png";
    z2++;
  } else if (z2 == 2) {
    image.src = "images/numbers/3.png";
    z2++;
  } else if (z2 == 3) {
    image.src = "images/numbers/4.png";
    z2++;
  } else if (z2 == 4) {
    image.src = "images/numbers/5.png";
    z2++;
  } else if (z2 == 5) {
    image.src = "images/numbers/6.png";
    z2++;
  } else if (z2 == 6) {
    image.src = "images/numbers/7.png";
    z2++;
  } else if (z2 == 7) {
    image.src = "images/numbers/8.png";
    z2++;
  } else if (z2 == 8) {
    image.src = "images/numbers/9.png";
    z2++;
  } else if (z2 == 9) {
    image.src = "images/numbers/10.png";
    z2++;
  } else if (z2 == 10) {
    image.src = "images/numbers/11.png";
    z2++;
  } else {
    z2 = 0;
    image.src = "images/numbers/12.png";
  }
  document.getElementById("clockTick").play();
}
function n2b2Scroll() {
  var image = document.getElementById("n2b2");
  if (x2 == 0) {
    image.src = "images/numbers/1.png";
    x2++;
  } else if (x2 == 1) {
    image.src = "images/numbers/2.png";
    x2++;
  } else if (x2 == 2) {
    image.src = "images/numbers/3.png";
    x2++;
  } else if (x2 == 3) {
    image.src = "images/numbers/4.png";
    x2++;
  } else if (x2 == 4) {
    image.src = "images/numbers/5.png";
    x2++;
  } else {
    x2 = 0;
    image.src = "images/numbers/0.png";
  }
  document.getElementById("clockTick").play();
}
function n3b2Scroll() {
  var image = document.getElementById("n3b2");
  if (y2 == 0) {
    image.src = "images/numbers/1.png";
    y2++;
  } else if (y2 == 1) {
    image.src = "images/numbers/2.png";
    y2++;
  } else if (y2 == 2) {
    image.src = "images/numbers/3.png";
    y2++;
  } else if (y2 == 3) {
    image.src = "images/numbers/4.png";
    y2++;
  } else if (y2 == 4) {
    image.src = "images/numbers/5.png";
    y2++;
  } else if (y2 == 5) {
    image.src = "images/numbers/6.png";
    y2++;
  } else if (y2 == 6) {
    image.src = "images/numbers/7.png";
    y2++;
  } else if (y2 == 7) {
    image.src = "images/numbers/8.png";
    y2++;
  } else if (y2 == 8) {
    image.src = "images/numbers/9.png";
    y2++;
  } else {
    y2 = 0;
    image.src = "images/numbers/0.png";
  }
  document.getElementById("clockTick").play();
}
function tCheck2() {
  var b1 = document.getElementById("n1b2");
  var b2 = document.getElementById("n2b2");
  var b3 = document.getElementById("n3b2");
  var b4 = document.getElementById("colon2");
  if (x2 == 4 && z2 == 4 && y2 == 0) {
    b1.classList.add("opaque");
    b2.classList.add("opaque");
    b3.classList.add("opaque");
    b4.classList.add("opaque");
    b1.removeAttribute("onclick");
    b2.removeAttribute("onclick");
    b3.removeAttribute("onclick");
    document.getElementById("dBoom").play();
    desk12 = desk12 + 1;
    desk1WinCheck();
  }
  secretWinCheck();
}
function n1b3Scroll() {
  var image = document.getElementById("n1b3");
  if (z3 == 0) {
    image.src = "images/numbers/1.png";
    z3++;
  } else if (z3 == 1) {
    image.src = "images/numbers/2.png";
    z3++;
  } else if (z3 == 2) {
    image.src = "images/numbers/3.png";
    z3++;
  } else if (z3 == 3) {
    image.src = "images/numbers/4.png";
    z3++;
  } else if (z3 == 4) {
    image.src = "images/numbers/5.png";
    z3++;
  } else if (z3 == 5) {
    image.src = "images/numbers/6.png";
    z3++;
  } else if (z3 == 6) {
    image.src = "images/numbers/7.png";
    z3++;
  } else if (z3 == 7) {
    image.src = "images/numbers/8.png";
    z3++;
  } else if (z3 == 8) {
    image.src = "images/numbers/9.png";
    z3++;
  } else if (z3 == 9) {
    image.src = "images/numbers/10.png";
    z3++;
  } else if (z3 == 10) {
    image.src = "images/numbers/11.png";
    z3++;
  } else {
    z3 = 0;
    image.src = "images/numbers/12.png";
  }
  document.getElementById("clockTick").play();
}
function n2b3Scroll() {
  var image = document.getElementById("n2b3");
  if (x3 == 0) {
    image.src = "images/numbers/1.png";
    x3++;
  } else if (x3 == 1) {
    image.src = "images/numbers/2.png";
    x3++;
  } else if (x3 == 2) {
    image.src = "images/numbers/3.png";
    x3++;
  } else if (x3 == 3) {
    image.src = "images/numbers/4.png";
    x3++;
  } else if (x3 == 4) {
    image.src = "images/numbers/5.png";
    x3++;
  } else {
    x3 = 0;
    image.src = "images/numbers/0.png";
  }
  document.getElementById("clockTick").play();
}
function n3b3Scroll() {
  var image = document.getElementById("n3b3");
  if (y3 == 0) {
    image.src = "images/numbers/1.png";
    y3++;
  } else if (y3 == 1) {
    image.src = "images/numbers/2.png";
    y3++;
  } else if (y3 == 2) {
    image.src = "images/numbers/3.png";
    y3++;
  } else if (y3 == 3) {
    image.src = "images/numbers/4.png";
    y3++;
  } else if (y3 == 4) {
    image.src = "images/numbers/5.png";
    y3++;
  } else if (y3 == 5) {
    image.src = "images/numbers/6.png";
    y3++;
  } else if (y3 == 6) {
    image.src = "images/numbers/7.png";
    y3++;
  } else if (y3 == 7) {
    image.src = "images/numbers/8.png";
    y3++;
  } else if (y3 == 8) {
    image.src = "images/numbers/9.png";
    y3++;
  } else {
    y3 = 0;
    image.src = "images/numbers/0.png";
  }
  document.getElementById("clockTick").play();
}
function tCheck3() {
  var c1 = document.getElementById("n1b3");
  var c2 = document.getElementById("n2b3");
  var c3 = document.getElementById("n3b3");
  var c4 = document.getElementById("colon3");
  if (x3 == 3 && z3 == 11 && y3 == 5) {
    c1.classList.add("opaque");
    c2.classList.add("opaque");
    c3.classList.add("opaque");
    c4.classList.add("opaque");
    c1.removeAttribute("onclick");
    c2.removeAttribute("onclick");
    c3.removeAttribute("onclick");
    document.getElementById("dBoom").play();
    desk13 = desk13 + 1;
    desk1WinCheck();
  }
  secretWinCheck();
}
function n1b4Scroll() {
  var image = document.getElementById("n1b4");
  if (z4 == 0) {
    image.src = "images/numbers/1.png";
    z4++;
  } else if (z4 == 1) {
    image.src = "images/numbers/2.png";
    z4++;
  } else if (z4 == 2) {
    image.src = "images/numbers/3.png";
    z4++;
  } else if (z4 == 3) {
    image.src = "images/numbers/4.png";
    z4++;
  } else if (z4 == 4) {
    image.src = "images/numbers/5.png";
    z4++;
  } else if (z4 == 5) {
    image.src = "images/numbers/6.png";
    z4++;
  } else if (z4 == 6) {
    image.src = "images/numbers/7.png";
    z4++;
  } else if (z4 == 7) {
    image.src = "images/numbers/8.png";
    z4++;
  } else if (z4 == 8) {
    image.src = "images/numbers/9.png";
    z4++;
  } else if (z4 == 9) {
    image.src = "images/numbers/10.png";
    z4++;
  } else if (z4 == 10) {
    image.src = "images/numbers/11.png";
    z4++;
  } else {
    z4 = 0;
    image.src = "images/numbers/12.png";
  }
  document.getElementById("clockTick").play();
}
function n2b4Scroll() {
  var image = document.getElementById("n2b4");
  if (x4 == 0) {
    image.src = "images/numbers/1.png";
    x4++;
  } else if (x4 == 1) {
    image.src = "images/numbers/2.png";
    x4++;
  } else if (x4 == 2) {
    image.src = "images/numbers/3.png";
    x4++;
  } else if (x4 == 3) {
    image.src = "images/numbers/4.png";
    x4++;
  } else if (x4 == 4) {
    image.src = "images/numbers/5.png";
    x4++;
  } else {
    x4 = 0;
    image.src = "images/numbers/0.png";
  }
  document.getElementById("clockTick").play();
}
function n3b4Scroll() {
  var image = document.getElementById("n3b4");
  if (y4 == 0) {
    image.src = "images/numbers/1.png";
    y4++;
  } else if (y4 == 1) {
    image.src = "images/numbers/2.png";
    y4++;
  } else if (y4 == 2) {
    image.src = "images/numbers/3.png";
    y4++;
  } else if (y4 == 3) {
    image.src = "images/numbers/4.png";
    y4++;
  } else if (y4 == 4) {
    image.src = "images/numbers/5.png";
    y4++;
  } else if (y4 == 5) {
    image.src = "images/numbers/6.png";
    y4++;
  } else if (y4 == 6) {
    image.src = "images/numbers/7.png";
    y4++;
  } else if (y4 == 7) {
    image.src = "images/numbers/8.png";
    y4++;
  } else if (y4 == 8) {
    image.src = "images/numbers/9.png";
    y4++;
  } else {
    y4 = 0;
    image.src = "images/numbers/0.png";
  }
  document.getElementById("clockTick").play();
}
function tCheck4() {
  var d1 = document.getElementById("n1b4");
  var d2 = document.getElementById("n2b4");
  var d3 = document.getElementById("n3b4");
  var d4 = document.getElementById("colon4");
  if (x4 == 0 && z4 == 5 && y4 == 5) {
    d1.classList.add("opaque");
    d2.classList.add("opaque");
    d3.classList.add("opaque");
    d4.classList.add("opaque");
    d1.removeAttribute("onclick");
    d2.removeAttribute("onclick");
    d3.removeAttribute("onclick");
    document.getElementById("dBoom").play();
    desk14 = desk14 + 1;
    desk1WinCheck();
  }
  secretWinCheck();
}
function n1b5Scroll() {
  var image = document.getElementById("n1b5");
  if (z5 == 0) {
    image.src = "images/numbers/1.png";
    z5++;
  } else if (z5 == 1) {
    image.src = "images/numbers/2.png";
    z5++;
  } else if (z5 == 2) {
    image.src = "images/numbers/3.png";
    z5++;
  } else if (z5 == 3) {
    image.src = "images/numbers/4.png";
    z5++;
  } else if (z5 == 4) {
    image.src = "images/numbers/5.png";
    z5++;
  } else if (z5 == 5) {
    image.src = "images/numbers/6.png";
    z5++;
  } else if (z5 == 6) {
    image.src = "images/numbers/7.png";
    z5++;
  } else if (z5 == 7) {
    image.src = "images/numbers/8.png";
    z5++;
  } else if (z5 == 8) {
    image.src = "images/numbers/9.png";
    z5++;
  } else if (z5 == 9) {
    image.src = "images/numbers/10.png";
    z5++;
  } else if (z5 == 10) {
    image.src = "images/numbers/11.png";
    z5++;
  } else {
    z5 = 0;
    image.src = "images/numbers/12.png";
  }
  document.getElementById("clockTick").play();
}
function n2b5Scroll() {
  var image = document.getElementById("n2b5");
  if (x5 == 0) {
    image.src = "images/numbers/1.png";
    x5++;
  } else if (x5 == 1) {
    image.src = "images/numbers/2.png";
    x5++;
  } else if (x5 == 2) {
    image.src = "images/numbers/3.png";
    x5++;
  } else if (x5 == 3) {
    image.src = "images/numbers/4.png";
    x5++;
  } else if (x5 == 4) {
    image.src = "images/numbers/5.png";
    x5++;
  } else {
    x5 = 0;
    image.src = "images/numbers/0.png";
  }
  document.getElementById("clockTick").play();
}
function n3b5Scroll() {
  var image = document.getElementById("n3b5");
  if (y5 == 0) {
    image.src = "images/numbers/1.png";
    y5++;
  } else if (y5 == 1) {
    image.src = "images/numbers/2.png";
    y5++;
  } else if (y5 == 2) {
    image.src = "images/numbers/3.png";
    y5++;
  } else if (y5 == 3) {
    image.src = "images/numbers/4.png";
    y5++;
  } else if (y5 == 4) {
    image.src = "images/numbers/5.png";
    y5++;
  } else if (y5 == 5) {
    image.src = "images/numbers/6.png";
    y5++;
  } else if (y5 == 6) {
    image.src = "images/numbers/7.png";
    y5++;
  } else if (y5 == 7) {
    image.src = "images/numbers/8.png";
    y5++;
  } else if (y5 == 8) {
    image.src = "images/numbers/9.png";
    y5++;
  } else {
    y5 = 0;
    image.src = "images/numbers/0.png";
  }
  document.getElementById("clockTick").play();
}
function tCheck5() {
  var e1 = document.getElementById("n1b5");
  var e2 = document.getElementById("n2b5");
  var e3 = document.getElementById("n3b5");
  var e4 = document.getElementById("colon5");
  if (x5 == 1 && z5 == 9 && y5 == 5) {
    e1.classList.add("opaque");
    e2.classList.add("opaque");
    e3.classList.add("opaque");
    e4.classList.add("opaque");
    e1.removeAttribute("onclick");
    e2.removeAttribute("onclick");
    e3.removeAttribute("onclick");
    document.getElementById("dBoom").play();
    desk15 = desk15 + 1;
    desk1WinCheck();
  }
  secretWinCheck();
}
function desk1WinCheck() {
  if (desk11 == 1 && desk12 == 1 && desk13 == 1 && desk14 == 1 && desk15 == 1) {
    showKeyModal();
    keys = keys + 1;
  }
}
function checkInputD2() {
  if (
    document.getElementById("tAnswer").value == "27c8w12lint" ||
    document.getElementById("tAnswer").value == "27C8W12LINT" ||
    document.getElementById("tAnswer").value == "2 7 C 8 W 1 2 L I N T" ||
    document.getElementById("tAnswer").value == "2 7 c 8 w 1 2 l i n t"
  ) {
    showKeyModal2();
    document.getElementById("dBoom").play();
    keys = keys + 1;
    document.getElementById("tAnswer").style.display = "none";
    document.getElementById("Submit").style.display = "none";
  }
  document.getElementById("tAnswer").value = "";
}
function gainScrew() {
  sd = sd + 1;
  document.getElementById("SD").style.display = "none";
  document.getElementById("clockTick").play();
}
function ventModalCheck() {
  if (sd >= 1) {
    document.getElementById("ventOpenSFX").play();
    changeVentDoor();
  } else {
    document.getElementById("ventMove").play();
  }
}
function changeVentDoor() {
  document.getElementById("ventE").classList.remove("ventOpenImage");
  document.getElementById("ventE").classList.add("ventOpenImage2");
  document.getElementById("ventE").setAttribute("onclick", "showVentModal()");
}
function gainCD() {
  cd = cd + 1;
  document.getElementById("clockTick").play();
  document.getElementById("cd").style.display = "none";
}
function playCD() {
  if (cd >= 1) {
    var audio2 = document.getElementById("scarySong");
    var audio = document.getElementById("backAmbience");
    audio2.play();
    audio.pause();
    audio2.volume = 0.4;
    keys = keys + 1;
    showKeyModal3();
    document.getElementById("cdPlayer").removeAttribute("onclick");
  }
}
function useKey() {
  if (keys >= 1) {
    keys = keys - 1;
    locks = locks + 1;
    console.log(locks);
    document.getElementById("lockSound").play();
    changeDoorBackground();
  }
}
function changeDoorBackground() {
  if (locks == 0) {
    document.getElementById("bgPic").classList.add("door-modal-content");
  } else if (locks == 1) {
    document.getElementById("bgPic").classList.remove("door-modal-content");
    document.getElementById("bgPic").classList.add("door-modal-content2");
  } else if (locks == 2) {
    document.getElementById("bgPic").classList.remove("door-modal-content2");
    document.getElementById("bgPic").classList.add("door-modal-content3");
  } else if (locks == 3) {
    document.getElementById("bgPic").classList.remove("door-modal-content3");
    document.getElementById("bgPic").classList.add("door-modal-content4");
    document.getElementById("escape").play();
    document.getElementById("scarySong").pause();
    ecv.style.display = "flex";
    setTimeout(function () {
      window.location.href = "https://diskrio.github.io/David-s-Escape-Room/";
    }, 12000);
  }
}
function secretWinCheck() {
  if (
    z == 1 &&
    x == 2 &&
    y == 3 &&
    z2 == 4 &&
    x2 == 5 &&
    y2 == 6 &&
    z3 == 7 &&
    x3 == 0 &&
    y3 == 8 &&
    z4 == 9 &&
    x4 == 1 &&
    y4 == 0 &&
    z5 == 11 &&
    x5 == 1 &&
    y5 == 2
  ) {
    showSecretModal();
  }
}
setInterval(cover, 1);
