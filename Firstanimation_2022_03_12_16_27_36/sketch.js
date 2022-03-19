
var cnv, soundFile, fft, peakDetect;

var ellipseWidth = 10;
var ellipseWidth2 = 15;

function setup(){

  background(0);
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0);
  textAlign(CENTER);

  soundFile = loadSound('Puddles.mp3');

  // p5.PeakDetect requires a p5.FFT
  fft = new p5.FFT();

  peakDetect = new p5.PeakDetect(4000, 12000, 0.2);

}

function draw(){

  background('#fae');
  text('...Now Playing Puddles', width/2, height/4);

  // peakDetect accepts an fft post-analysis
  fft.analyze();
  peakDetect.update(fft);

  if (peakDetect.isDetected ) {
    ellipseWidth = 600;
  } else {
    ellipseWidth *= 0.60;
  }

  if (peakDetect.isDetected ) {
    ellipseWidth2 = 300;
  } else {
    ellipseWidth2 *= 0.90;
  }

  ellipse(width/2, height/2, ellipseWidth, ellipseWidth);
  ellipse(width/2, height/2, ellipseWidth2, ellipseWidth2);

}
  
function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {

    if (soundFile.isPlaying()) {
      soundFile.stop();
    } else {
      soundFile.play();
    }
  }
}

