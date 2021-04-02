//NameSpace
//Engine is used to create the Physics Engine
const Engine = Matter.Engine;
//World is used to create the physical World and add bodies to it
const World = Matter.World;
//Bodies is used to create the physical bodies which inhibits in the world
const Bodies = Matter.Bodies;

//create your own engine, world and bodies using the physics engine
var myEngine, myWorld;

var ground1, box1, box2;

function setup() {
  createCanvas(400,400);
  //create our own engine
  myEngine = Engine.create();
  //myWorld is myEngine's world 
  //create the world of the our own engine
  myWorld = myEngine.world;
  //create new ground object out of the Ground Class 
   ground1 = new Ground(200, 350, 400, 10);

  //create new Box object out of Box Class
    box1 = new Box(200,100,50,50);  
    box2 = new Box(240,300,50,50);
    
   }

function draw() {
  background("Black"); 

  textSize(20);
  text(mouseX + ", " + mouseY, mouseX, mouseY);
  Engine.update(myEngine); 
 //when ground is created and displayed before the boxes then the color given to ground also applies to the boxes.
 //Solution : Add push and pop
 //Solution:  Add ground.display() after the box1.display() and box2.display()
 ground1.display();
 box1.display();
 box2.display();
 //console.log(box2.body.angle)


    
  drawSprites();
}