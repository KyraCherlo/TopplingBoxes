// Engine, World & Bodies are 3 main componenets of Physics Library
// create 3 constants for these so that their value cannot be changed later
const Engine = Matter.Engine; // Classes Engine => World
const World = Matter.World;
const Bodies = Matter.Bodies;


//create engine & world objects variables
var engine,world;   /// Objects  Engine => engine          engine =>world
var box;
var ground,ball;
var box1,box2;

function setup(){
   createCanvas(400,400);
   //create engine object
   engine = Engine.create();
   //create world for Engine
   world = engine.world;
    ground= new Ground(200,390,400,20);
  

   box1 = new Box(200,300,50,50); // constructor is called here
   box2 = new Box(240,100,50,100); 
  
}

function draw(){
    background(0);
    // update the Engine with engine object
    Engine.update(engine);
    

    box1.display();
    box2.display();
    ground.display();
}