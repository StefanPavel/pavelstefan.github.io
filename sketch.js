var capture;
var btn;
var img;
var cnv;

function setup() {
  cnv = createCanvas(320, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
  btn = createButton("take photo");
  btn.mousePressed(savePhoto);
}

function draw() {
  background(255);
  image(capture, 0, 0, 320, 240);
}

function savePhoto()
{
    console.log("hgd");
    saveCanvas(cnv, "aa", "png");
}
