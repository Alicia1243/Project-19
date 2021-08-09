var bunny, bunnyImg;
var carrot, carrotG, carrotImg;
var cloud, cloudG, cloudImg;
var score;
var gameState = 0;

function preload(){
bunnyImg.loadImage("bunny.jpeg" , bunnyImg);
carrotImg.loadImage("carrot.jpeg" , carrotImg);
cloudImg.loadImage("cloud1.png" , cloudImg);
skyImg.loadImage("sky.png" , skyImg);
}

function setup() {
createCanvas(200, 300, 400, 600);
sky.setImage(skyImg);
}

createEdgeSprites();

function draw() {
 bunny.createSprite(200, 5, 4, 5);
 if (gameState === PLAY)
 {
 if (cloudG.isTouching(bunny))
 {
bunny.bounceOff(cloudG);
    bunny.velocityY = -10;   
 }
 if(bunny.isTouching(carrot))
 {
     score = score + 3;
     text("Score:" + score, 50, 250);
     carrot.destroy();
 }
     if (bunny.x = 600){
         gameState === END;
         text("You lost!" , 200, 300);
     }
 }
drawSprites();
}

function spawnClouds()
{
cloud.createSprite(Random(3, 397), Random(10, 597), 3, 5);
cloud.size = 0.3;
cloud.velocityX = -4 || 4;
cloud.lifetime = 800;
cloudG.add(cloud);
}


