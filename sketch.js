var fixedRect, movingRect;
var ball;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ball  = createSprite(600,100,50,50);
  ball.velocityY = 4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (isTouching(fixedRect,movingRect)){
   fixedRect.shapeColor = "red";
   movingRect.shapeColor = "red";
 }
 else{
   fixedRect.shapeColor = "green";
   movingRect.shapeColor = "green";
 }
 bounceOff(ball,fixedRect);
  drawSprites();
}