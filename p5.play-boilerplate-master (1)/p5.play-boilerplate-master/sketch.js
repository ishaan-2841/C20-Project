var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

    speed = random(55, 90);
    weight = random(400, 1500);

    car = createSprite(50, 200, 50, 50);
      car.velocityX = speed;
      car.shapeColor = "#D3D3D3"

    wall = createSprite(1200, 200, 40, height/2);
      wall.shapeColor = "white";

}


function draw() {
  background(66,66,66); 
    if (wall.x-car.x < (car.width+wall.width)/2){
      car.velocityX = 0;
      
      var Deformation = 0.5*weight*speed*speed/22509;
      if (Deformation < 100) {
        car.shapeColor = "#1EA362";
      }

      if (Deformation > 100 && Deformation < 180) {
        car.shapeColor = "#FFE047"
      }

      if (Deformation > 180) {
      car.shapeColor = "#DD4B3E";
      }
    }

  drawSprites();
}