
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	bobObject1 = new Bob(100,400,30); 
	bobObject2 = new Bob(150,400,30); 
	bobObject3 = new Bob(200,400,30); 
	bobObject4 = new Bob(250,400,30); 
	bobObject5 = new Bob(300,400,30); 
	roof1 = new Roof(400,200,700,10)
	rope1 = new Rope(bobObject1.body,roof1.body,bobDiameter*2,0)

}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  
  drawSprites();
 
}



