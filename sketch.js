const  Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myWorld , myEngine ,box1,box2;
function setup() {
  createCanvas(800,800);
  myEngine= Engine.create();
  myWorld = myEngine.world;
  
 box1=new Box(400,400,50,50)
 box2=new Box(460,400,50,50)
 ground= new Ground(400,790,800,8)
  

  
  
}

function draw() {
  background("black");  
  Engine.update(myEngine)
 
  box1.display();
  box2.display();
  ground.display()
 }




