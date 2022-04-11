var player, carrot, super_carrot , enemy, jump_boost , canvas
var playerImg, carrotImg, super_carrotImg , enemyImg , jump_boostImg , canvasImg

function preload() {
  playerImg = loadImage("assets/Ninja Bunny.png")
  carrotImg = loadImage("assets/Carrot.png")
  super_carrotImg = loadImage("assets/Super Carrot.png")
  canvasImg = loadImage("assets/Background.jpg")
  jump_boostImg = loadImage("assets/Jump Icon.png")
  enemyImg = loadImage("assets/Enemy Bunny.png")
}

function setup(){
  createCanvas(windowWidth, windowHeight)
  player = createSprite(650, 560 , 1, 1)
  player.addImage (playerImg)
  player.scale = 0.5

  enemy = createSprite(650, 560 , 1, 1)
  enemy.addImage (enemyImg)
  enemy.scale = 0.5

  carrot = createSprite(1, 1)
  carrot.addImage (carrotImg)
  carrot.scale = 0.1



}

function draw() {
  background (canvasImg) 
  drawSprites()
  carrot.y = player.y
  carrot.x = player.x


  if(keyIsDown(LEFT_ARROW)){
  //  player.x = player.x - 3
  player.velocityX = 3
  }
}