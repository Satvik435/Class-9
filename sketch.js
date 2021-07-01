var box 
function setup() {
  createCanvas(800,500);
  box=createSprite(200,200,50,50)
}

function draw() 
{
  background(30);
 if(keyIsDown(LEFT_ARROW)) {
    box.x = box.x - 2
  }
if(keyIsDown(RIGHT_ARROW)) {
  box.x = box.x + 2
}
if(keyIsDown(UP_ARROW)){
  box.y = box.y - 2
}
if(keyIsDown(DOWN_ARROW)){
  box.y = box.y + 2
}
drawSprites()
}




