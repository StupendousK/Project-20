var car, wall;
var speed, weight;

var deformation;

function setup() {
  createCanvas(1600,400);
  speed = random(55, 90);
  weight = random(400, 1500);

  deformation = 0.5 * weight * speed * speed/22500;

  car = createSprite(100, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = rgb(80, 80, 80);

  
}

function draw() {
  background(255,255,255);  
  
  textSize(30);
  fill("black");
  text("Deformation: " + deformation, 50, 50);

  carIsColliding();
  drawSprites();
}

function carIsColliding() {
  if(car.x-wall.x<wall.width/2+car.width/2 && wall.x-car.x<car.width/2+wall.width/2 && 
    car.y-wall.y<wall.height/2+car.height/2 && wall.y-car.y<car.height/2+wall.height/2){
    
    if(deformation < 100) {
      car.shapeColor = "green";
      car.velocityX = 0;
      car.x = 1450;
    }
    else if(deformation > 100 && deformation <= 180) {
    car.shapeColor = "yellow";
    car.velocityX = 0;
    car.x = 1450;
  }
  else if(deformation > 180){
    car.shapeColor = "red";
    car.velocityX = 0;
    car.x = 1450;
  }
 }
}