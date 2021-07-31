|function preload(){
buttonImg =loadImage("button1.png")
image1=loadImage("images.jpeg")
  Bdaymp3=loadSound("")

}

function setup() {
 createCanvas(windowWidth,windowHeight);
  button = createSprite(width/2,height/2,50);
  button.addImage(buttonImg);
  button.scale=0.3
 girl=createSprite(width/2,height/2,50,50);
  girl.addImage(image1);
  girl.scale=2.0;
  girl.visible=false;
  
}

function draw() {
 background("pink")
  if(keyCode === 32){
    button.visible=false;
    girl.visible=true; 
  }

  drawSprites()
}