const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	//Create a Ground
	

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
 
 
  
 
  
  
 
}
