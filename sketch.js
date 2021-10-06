var box;






function setup() {

  createCanvas(400,400);
  box = createSprite(200,200,10,10)
}

function draw() 
{
  background(30);
if(keyIsDown(DOWN_ARROW)){
box.y = box.y + 11;
}

if(keyIsDown(UP_ARROW)){
  box.y = box.y - 11;
}

if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x + 11;
}

if(keyIsDown(LEFT_ARROW)){
  box.x = box.x - 11;
}

if(keyIsDown(RIGHT_ARROW)){
        background ("red");
}

if(keyIsDown(LEFT_ARROW)){
  background ("yellow");
}

if(keyIsDown(UP_ARROW)){
  background ("blue");
}

if(keyIsDown(DOWN_ARROW)){
  background ("green");
}
drawSprites();
}




