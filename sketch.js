var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//Matter.Body.setStatic(packageBody,true);
 	World.add(world, ground);
rect(width/2,190,250,10);
 	

	Engine.run(engine);
	
	rect1 = new Box(400,height - 55,200,20)
	rect2 = new Box(500,height - 95,20,100)
	rect3 = new Box(300,height - 95,20,100)
  rect1.shapeColor=rgb(255,0,0)

  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
 packageBody.y = helicopterSprite.y;
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

 
  
  drawSprites();
  
  rect1.display();
  rect2.display();
  rect3.display();
keyPressed();
 
}

function keyPressed() {

if(keyCode===DOWN_ARROW){

Matter.Body.setStatic(packageBody,false);


}


}







