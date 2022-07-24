const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, backgroundImg;
var canvas, angle, tower, wall, cannon;
var bombs = [];
var asteroids = [];
var score = 0;
var asteroidImg;
var nuclearbomb;
var isGameOver = false

function preload(){
  backgroundImg = loadImage("./assets/istockphoto-1173451503-612x612.jpg");
  asteroidImg = loadImage("./assets/asteroid.png");
  asteroidbrokenImg = loadImage("./assets/asteroid broken.png");
  bombs = loadImage("./assets/nuclear bomb.png")
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15


  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  cannon = new Cannon(180, 110, 240, 140, angle);
  nuclearbomb = new NuclearBomb(cannon.x, cannon.y);
}


function draw() 
{
  background(51);
  image(backgroundImg, 0, 0, width, height);
  Engine.update(engine);
  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();
  for (var i = 0; i < bombs.length; i++) {
    showNuclearBombs(bombs[i]);
    
  }
  cannon.display();
 
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    //bombs[bombs.length - 1].shoot();
    nuclearbomb = new NuclearBomb(cannon.x, cannon.y);
    bombs.push(nuclearbomb);
  }
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
   nuclearbomb.shoot()
    //bombs.push(nuclearbomb);
  }
}

function showNuclearBombs(bombs, i) {
  
    bombs.display();
   
  }

  