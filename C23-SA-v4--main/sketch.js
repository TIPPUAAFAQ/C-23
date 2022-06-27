
//Create namespace for Engine
const Engine=Matter.Engine;
//Create namespace for World
const World=Matter.World;
//Create namespace for Bodies
const Bodies=Matter.Bodies;
//Create namespace for Body
const Body=Matter.body;

var ball,ground;

function setup() {
  createCanvas(400,400);
//create the engine
engine=Engine.create()
//Add world to the engine
world=engine.world;  

var b_props={
restitution:1.5,
frictionAir:0.02
}

var b1_props={
  restitution:1.5,
  frictionAir:0.02
  }

var g_props={
isStatic:true
}

ball1=Bodies.circle(200,200,30,b1_props)
World.add(world,ball1)

//create a ground
ball=Bodies.circle(100,100,20,b_props)
//add to world
World.add(world,ball)
  
fill("red")
 ground=Bodies.rectangle(10,290,500,20,g_props) 
World.add(world,ground)
ground.velocityY=-3;
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
 rect(ground.position.x,ground.position.y,500,20)

ellipse(ball1.position.x,ball1.position.y,20);
  
  
}

