//physics engine - matter.js
//three objects  - World, Engine, Bodies
//Engine - create a physics engine
//World - create a physical world
//Bodies - create bodies or object

//we can access World, Engine, Bodies from matter.js by using namespacing
//const - constant - its value will remain same

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup() {
  createCanvas(400,400);
  //we are creating our own engine
  engine = Engine.create();
  //creating our world with help of engine
  world = engine.world;

  //isStatic - if we want our object to fall or now. if we want it fall - false, if we want it not to fall - true
  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  //restitution - bouncy if we want our ball to bouncy - more than 0
  var ball_options={
    restitution:1.0
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);


  console.log(ball);  
  
}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,20,20)

  
}