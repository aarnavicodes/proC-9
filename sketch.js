var box;

function setup() {
  createCanvas(1000,700);
  box = createSprite(200, 200, 20, 20);
  console.log(box.position.y);
}

function draw() 
{
  background(225, 225, 100);
  if(keyIsDown(LEFT_ARROW)){
    box.position.x -= 10;
  }
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x += 10;
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y += 10;
  }

  drawSprites();
}




