
//variables allow change in resolution, designed for 16:9 aspect ratio
//original resolution : 640x480
let x = window.innerWidth
let y = window.innerHeight
let count = 0
let img;
let lightning;

function preload()
{
  img = loadImage('door.png');
  lightning = loadImage('lightning.png')
}

function setup() {
  createCanvas(x, y);
  
}

function draw() {
  x = window.innerWidth
  y = window.innerHeight

  if(mouseIsPressed == true)
  {
    count = count + 1
  }
  if(count == 4) {count = 0}
  if(count == 0) {background(113, 209, 206);}
  else if(count == 1) {background(150, 150, 220);}
  else if(count == 2) {background(40, 75, 150);}
  else {background(0, 44, 240);}

  

  fill(255, 241, 84)
  strokeWeight(0)
  ellipse(mouseX, mouseY, x/2, x/2)

    if(keyIsPressed == true)
  {
    image(lightning, x/2, y/10)
  }
  
  fill(54, 224, 52)
  rect(0, y/1.2, x, y)
  
  fill(255, 0, 0)
  rect(x/3, y/2, x/2.6, y/3)
  triangle(x/3, y/2, x/1.39, y/2, x/1.9, y/3)
  
  img.resize(x/5, y/2.5)
  image(img, x/2.4, y/2.23);

  fill(255, 255, 255, 150)
  for(let xMod = 1.4; xMod <= 2; xMod = xMod + .05)
  {
    for(let yMod = 5; yMod <= 10; yMod = yMod + .05)
    {
      circle(x/xMod, y/yMod, x/20)
    }
  }
}