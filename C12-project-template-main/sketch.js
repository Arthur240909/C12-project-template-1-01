var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1png","Runner-2png")
 
}

function setup(){
  
  createCanvas(400,400);
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY=4;
path.scale=1.2;

boy=createSprite(180,340,30,30);
boy.scale=0.08;
boy.scale=addAnimation("JakeRunning",boyImg);
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x = World.mouseX;

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
