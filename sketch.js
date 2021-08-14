var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("India.jpg");
 bg2 = loadImage("images.jpg");
}

function setup() {
  createCanvas(1200,800);
  system = new System()
  security = new Security()
}

function draw() {
 background(bg);
  clues();
  security.display();

   //Add code to display score in the middle of the screen
  fill("black")
  textSize(20);
  text("SCORE:" +score, 720,700);

  // Add code to display the end screen
if(score === 3){
   clear()
   background(bg2)
  
 }
  drawSprites();
}