var wall, thickness;
var bullet, speed, weight;

function setup() {
  //create the canvas
  createCanvas(1600,400);

  //bullet weight and speed
  speed = random(223,321);
  weight = random(30,52);

  //wall thickness
  thickness = random(22,83);

  //create the bullet and give it speed
  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;

  //create the bullet and give it color
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
  
}

function draw() {
  //set the background color
  background(255,255,255);  

  if(hasCollided(bullet,wall)){
    //stop the bullet after colliding
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage > 10){
      //make the color red
      wall.shapeColor = color(255,0,0);
    }
  
    if(damage < 10){
      //make the color green
      wall.shapeColor = color(0,255,0);
    }
  }

  //draw the sprites
  drawSprites();
}

function hasCollided(object1, object2){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  else {
      return false;
  }
}