var ship,ship_floating
var ground,invinsibleGround



function preload(){
  seaImg= loadImage("sea.png");
ship_floating = loadanimation("ship-1.png","ship-2.png", "ship-3.png","ship-4.png");


}

function setup(){
  createCanvas(400,400);
  


// creat a ship sprite
ship=createSprite(50,160,20,50);
ship.addAnimation("floating",ship_floating);

//create ground sprite
ground = createSprite(200,180,400,20);
ground.x = ground.width /2;
ground.velocityX = -4;


//creating invinsible ground
invinsibleGround = createSprite(200,190,400,10);
invinsibleGround.visible = false;
}


function draw() {
  background("blue");
  sea.addImage("seeImg")
 
}

//code to reset the background
if(sea.x < 0 ){
  sea.x = sea.width/2; 
}













