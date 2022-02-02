var sea, seaImg;
var ship,shipImg;
function preload(){
  seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");

  ship = createSprite(120,300,20,20);
  ship.addAnimation("seaImg1",shipImg1);

  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -2;


  
}

function draw() {
  background("blue");

 drawSprites();
}