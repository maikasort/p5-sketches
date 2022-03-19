let CockyGirl;

function preload() {
	CockyGirl = loadSound('CockyGirl.mp3');
  inconsolata = loadFont('inconsolata.otf');
}

function setup() {
  createCanvas(windowWidth,windowHeight , WEBGL);
  CockyGirl.play();
  createGraphics(window.innerWidth - 4, window.innerHeight - 4);
  textFont(inconsolata);
  textSize(100);
  textAlign(CENTER, CENTER);
  background(0);
 
}

function draw() {
  if (mouseIsPressed) {
    text('Steve Lacy - Cocky Girl', 0, 0);
    fill(255, 53, 184);
}

if(key == 'm'){
      frameRate(100);
      fill(250,218,221);
      stroke(255,20,147);
      rotateY(millis() / 3000);
      background(255,182,193);
      for(let posX = 0; posX < 10; posX++) {
        for(let posY = 0; posY < 10; posY++) {
          sphere(posX * 20, posY * 20, 10);
    }
  }
}

if(key == 'e'){
    frameRate(90);
    fill(128,0,0);
    stroke(178,34,34);
    rotateX(millis() / 2000);
    background(220,20,60);
    for(let posX = 0; posX < 10; posX++) {
      for(let posY = 0; posY < 10; posY++) {
        sphere(posX * 20, posY * 20, 10);
    }
  }
}

if(keyCode === 32){
    frameRate(100);
    fill(255,215,0);
    stroke(240,230,140);
    rotateY(millis() / 3000);
    rotateX(millis() / 3000);
    background(255,165,0)
    for(let posX = 0; posX < 10; posX++) {
      for(let posY = 0; posY < 10; posY++) {
      sphere(posX * 20, posY * 20, 10);
    }
  }
}
  
}  