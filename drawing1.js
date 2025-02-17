document.getElementById("hueSlide");
hueSlide.addEventListener("input", function () {
  hueSlideText.innerText = hueSlide.value;
});
hueSlide.value = 1;
document.getElementById("hueSlideText");
document.getElementById("satSlide");
document.getElementById("satSlideText");
satSlide.addEventListener("input", function () {
  satSlideText.innerText = satSlide.value;
});
satSlide.value = 100;
document.getElementById("briSlide");
document.getElementById("briSlideText");
briSlide.addEventListener("input", function () {
  briSlideText.innerText = briSlide.value;
});
briSlide.value = 100;
document.getElementById("opacSlide");
document.getElementById("opacSlideText");
opacSlide.addEventListener("input", function () {
  opacSlideText.innerText = opacSlide.value;
});
opacSlide.value = 1;
document.getElementById("rSlide");
document.getElementById("rSlideText");
rSlide.addEventListener("input", function () {
  rSlideText.innerText = rSlide.value;
});
rSlide.value = 5;
document.getElementById("hueCheck");

document.getElementById("BhueSlide");
BhueSlide.addEventListener("input", function () {
  BhueSlideText.innerText = BhueSlide.value;
});
BhueSlide.value = 0;
document.getElementById("BhueSlideText");
document.getElementById("BsatSlide");
document.getElementById("BsatSlideText");
BsatSlide.addEventListener("input", function () {
  BsatSlideText.innerText = BsatSlide.value;
});
BsatSlide.value = 0;
document.getElementById("BbriSlide");
document.getElementById("BbriSlideText");
BbriSlide.addEventListener("input", function () {
  BbriSlideText.innerText = BbriSlide.value;
});

BbriSlide.value = 78;
document.getElementById("resetC");
resetC.addEventListener("click", function () {
  pix.splice(0, pix.length);
  pixS.splice(0, pixS.length);
  clear();
});
document.getElementById("BopacSlide");
document.getElementById("BopacSlideText");
BopacSlide.addEventListener("input", function () {
  BopacSlideText.innerText = BopacSlide.value;
  bO = parseInt(BopacSlide.value);
  clear();
});
BopacSlide.value = 1;
document.getElementById("loopa");
loopa.addEventListener("click", function () {
  if (loopx == true) {
    loopx = false;
    loopa.style.background = "red";
    noLoop();
  } else {
    loopx = true;
    loopa.style.background = "green";
    loop();
  }
});
document.getElementById("frSlide");
document.getElementById("frSlideText");
frSlide.addEventListener("input", function () {
  frSlideText.innerText = frSlide.value;
});

frSlide.addEventListener("input", function () {
  frSlideText.innerText = frSlide.value;
});
frSlide.addEventListener("change", function () {
  fr = frSlide.value;
  frameRate(1 * fr);
});
let fr = 60;
document.getElementById("wInput");
document.getElementById("wInputText");
document.getElementById("hInput");
document.getElementById("hInputText");
wInput.addEventListener("input", function () {
  wInputText.innerText = wInput.value;
});
hInput.addEventListener("input", function () {
  hInputText.innerText = hInput.value;
});
document.getElementById("resizeB");
resizeB.addEventListener("click", function () {
  resizeCanvas(wInput.value, hInput.value);
  pix.splice(0, pix.length);
  pixS.splice(0, pixS.length);
});
document.getElementById("saveC");
saveC.addEventListener("click", function () {
  saveCanvas(tc, "myDrawing", "png");
});
document.getElementById("circlCheck");
circlCheck.addEventListener("change", function () {
  squarCheck.checked = false;
});
document.getElementById("squarCheck");
squarCheck.addEventListener("change", function () {
  circlCheck.checked = false;
});
circlCheck.checked = true;
document.getElementById("resizeBD");
resizeBD.addEventListener("click", function () {
  resizeCanvas(window.innerWidth, window.innerHeight);
});

let tc;
let bO;
let loopx = true;
let pix = [];
let pixS = [];
let mp = false;
let kp = false;
let mappedHue;
let mHD;

function setup() {
  tc = createCanvas(window.innerWidth, window.innerHeight);
  frameRate(60);
  colorMode(HSB);
  noStroke();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

class Pixels {
  constructor() {
    this.x = mouseX;
    this.y = mouseY + 0.1 * rSlide.value;

    if (hueCheck.checked == false) {
      this.hue = hueSlide.value;
    } else {
      let hue1 = 300 * noise(0.0109 * frameCount);
      mappedHue = map(hue1, 0, 300, -100, 450);
      this.hue = mappedHue;
    }
    this.sat = satSlide.value;
    this.bri = briSlide.value;
    this.opac = opacSlide.value;
    this.r = rSlide.value;
  }
  showPixel() {
    fill(this.hue, this.sat, this.bri, 1 * this.opac);
    circle(this.x, this.y, this.r);
  }
}
class SquarePixels {
  constructor() {
    this.x = mouseX - 0.4 * rSlide.value;
    this.y = mouseY - 0.35 * rSlide.value;

    if (hueCheck.checked == false) {
      this.hue = hueSlide.value;
    } else {
      let hue1 = 300 * noise(0.0109 * frameCount);
      mappedHue = map(hue1, 0, 300, -100, 450);
      this.hue = mappedHue;
    }
    this.sat = satSlide.value;
    this.bri = briSlide.value;
    this.opac = opacSlide.value;
    this.r = rSlide.value;
  }

  showSquare() {
    fill(this.hue, this.sat, this.bri, 1 * this.opac);
    square(this.x, this.y, this.r);
  }
}
function runPixels() {
  imAnnoyed = new Pixels();
  pix.push(imAnnoyed);
}

function runSqaurePixels() {
  imAnnoyedS = new SquarePixels();
  pixS.push(imAnnoyedS);
}

function removePix() {
  pix.splice(pix.length - 1, 1);
}
function removePixS() {
  pixS.splice(pixS.length - 1, 1);
}

function draw() {
  background(BhueSlide.value, BsatSlide.value, BbriSlide.value, bO);

  if (circlCheck.checked == true) {
    fill(hueSlide.val, satSlide.value, briSlide.value, opacSlide.value);
    circle(mouseX, mouseY, rSlide.value);
  }
  if (squarCheck.checked == true) {
    fill(hueSlide.val, satSlide.value, briSlide.value, opacSlide.value);
    square(
      mouseX - 0.4 * rSlide.value,
      mouseY - 0.35 * rSlide.value,
      rSlide.value
    );
  }

  if (mp == true) {
    if (circlCheck.checked == true) {
      runPixels();
    }
    if (squarCheck.checked == true) {
      runSqaurePixels();
    }
  }
  if (kp == true) {
    if (key == "r") {
      if (circlCheck.checked == true) {
        removePix();
        if (pix.length == 0) {
          removePixS();
        }
      }
      if (squarCheck.checked == true) {
        removePixS();
        if (pixS.length == 0) {
          removePix();
        }
      }
    }
  }

  for (i = 0; i < pix.length; i++) {
    pix[i].showPixel();
  }
  for (i = 0; i < pixS.length; i++) {
    pixS[i].showSquare();
  }

  if (hueCheck.checked == true) {
    hueSlide.value = mappedHue;
    hueSlideText.innerText = Math.round(mappedHue);
  }
}

function mousePressed() {
  mp = true;
}
function mouseReleased() {
  mp = false;
}

function keyPressed() {
  kp = true;
}
function keyReleased() {
  kp = false;
}

function touchStarted() {
  mp = true;
}

function touchEnded() {
  mp = false;
}
