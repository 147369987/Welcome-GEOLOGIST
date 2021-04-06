const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1;
var stone;
var iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber (200,300,60,60);
    stone = new Stone (700,500,70,70);
    iron = new Iron (450,500,70,40)

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
     
     

    plane.display();
    hammer.display();
    rubber1.display();
    stone.display();
    iron.display();

    
 
}