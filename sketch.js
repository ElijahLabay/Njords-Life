//The setup function only happens once
var particles = [];
var particleNumber = 100;
var bubbles = [];
var cacti = [];
let size = 18;
let minSize = 48;
let maxSize = 36;
let sizeSpeed = 0.04;

function setup() {
  createCanvas(500, 500); 
  background(218,186,219);//create a 500px X 500px canvas
}

//The draw function happens over and over again
function mouseClicked() {  
  size = map(sin(frameCount * sizeSpeed),-1.0,1.0,minSize,maxSize);

  background(255); 
  fill(0);
  textSize(size)
  // textSize(24 + (sin(frameCount/50)*50));
  textFont('Courier New');
  textStyle(BOLD);
  fill(243, 32, 96);
  text('HELP TURN FILL BUBBLES', 50, 200);
}
class Particle {
  constructor(x, y, r, o) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.opacity = o;
  }
  
  move(xSpeed, ySpeed) {
    this.x = this.x + xSpeed;
    this.y = this.y - ySpeed;
    for (var i = 0; i < particles.length; i++) {
      if (particles[i].x > width || particles[i].y < -10) {
        particles.splice(i, 1);
      }
    }
  }

  show() {
    var colorX = map(mouseX, 0, width, 53,114)
    var colorY = map(mouseY, 0, height, 65,50)
    fill(92,42,89, this.opacity);
    stroke(colorX, colorY, 84);
    ellipse(this.x, this.y, this.r, this.r);
  }
}
class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    var randomSize = random(-5,10);
    this.r = this.r + randomSize;
    for (let i = 0; i < bubbles.length; i++) {
      if (bubbles[i].r > 100) {
        bubbles.splice(i, 1);
      }
    }
  }

  show() {
    var colorX = map(mouseX, 0, width, 53,114)
    var colorY = map(mouseY, 0, height, 65,50)
    fill(255,30);
    stroke(colorX, colorY, 84);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

function draw() {
    var bgcolorX = map(mouseX, 0, width, 205, 124)
    var bgcolorY = map(mouseY, 0, height, 144, 186)
  background(218,186,219);

  for (let i = 0; i < particles.length; i++) {
    var originalXSpeed = random(-0.5, 3);
    var originalYSpeed = random(-1, 2.5);
    particles[i].move(originalXSpeed, originalYSpeed);
    particles[i].show();
  }

    for (let i = 0; i < particleNumber / 100; i++) {
    var randomX = random(-10, 0);
    var randomY = random(0, height * 1.7);
    var randomR = random(4, 12);
    var newP = new Particle(randomX, randomY, randomR, 50);
    particles.push(newP);
  }
  
  for (let i = 0; i < bubbles.length -1; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }  

  for (let i = 0; i < cacti.length; i++) {
    cacti[i].move();
    cacti[i].show();
  }  

}

function mouseMoved() {
  mouseOnScreen();
}

function mouseClicked() {
  mouseOnScreen();
}

function mouseDragged() {
  mouseOnScreen();
}

function mouseOnScreen() {
  
  for (let i = 0; i < particles.length; i++) {
    var randomXSpeed = random(0, mouseX * 0.01);
    var randomYSpeed = random(0, mouseY * 0.005);
    particles[i].move(randomXSpeed, randomYSpeed);
    particles[i].show();
  }
  
    for (let i = 0; i < particleNumber / 100; i++) {
    var randomXNew = random(-10, 0);
    var randomYNew = random(0, height * 1.7);
    var randomR = random(4, 12);
    var newP = new Particle(randomXNew, randomYNew, randomR, 0);
    particles.push(newP);
  }

  let bubbleSize = random(3, 14);
  let mouseBubble = new Bubble(mouseX, mouseY, bubbleSize);
  bubbles.push(mouseBubble);

    var mouseP = new Particle(mouseX, mouseY, randomR, 150);
    particles.push(mouseP);
}
