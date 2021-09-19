var box;



function setup(){
  createCanvas(500, 500);

  box = createSprite(100, 100, 50, 50);
  box.shapeColor = "red";
  box.velocityX = 3;

  edges=createEdgeSprites()


  

}



function draw(){
  background("black")

  box.bounceOff(edges)



  drawSprites();

}



