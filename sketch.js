var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudsGroup, cloudImage;
var obstacle1img, obstacle2img, obstacle3img, obstacle4img, obstacle5img, obstacle6img
var newImage;
var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  obstacle1img = loadImage("obstacle1.png")
  obstacle2img = loadImage("obstacle2.png")
  obstacle3img = loadImage("obstacle3.png")
  obstacle4img = loadImage("obstacle4.png")
  obstacle5img = loadImage("obstacle5.png")
  obstacle6img = loadImage("obstacle6.png")
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  score = 0;
  
}

function draw() {
  background(180);

  fill("purple")
  text("score:" + score, 550, 20)
  score = Math.round(frameCount/2)

  if (trex.isTouching(ground)) {
    if(keyDown("space")&& trex.y >= 100) {
      trex.velocityY = -10;
    }
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();

  spawnobstacle();
  
  drawSprites();
}


function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 134
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function spawnobstacle() {
  if(frameCount % 120 == 0) {
    obstacle = createSprite(600, 165)
    obstacle.velocityX = -3;
    rand = Math.round(random(1,6))
    switch (rand) {
      case 1:
        obstacle.addImage(obstacle1img)
        break;
      case 2:
        obstacle.addImage(obstacle2img)
        break;
      case 3:
        obstacle.addImage(obstacle3img)
        break;
      case 4:
        obstacle.addImage(obstacle4img)
        break;
      case 5:
        obstacle.addImage(obstacle5img)
        break;
      case 6:
        obstacle.addImage(obstacle6img)
        break;
      default:
        break;
    }
    obstacle.scale = 0.5;
    obstacle.lifetime = 350;
  }
}