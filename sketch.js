const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var engine,world;
var wood1,wood2,pig1,pig2
var bird,slingshot

var gameState = "onSling"
var bg ="bg.png"
var score=0;


function preload(){
 bg=loadImage("bg.png")
    
}


function setup(){
var canvas=createCanvas(1200,400)
engine=Engine.create();
world=engine.world;


ground=new Ground(500,height,1200,20)
platform=new Ground(150,305,300,170)

box1= new Box(700,320,70,70)
box2= new Box(920,320,70,70)
pig1=new Pig(810,350)
log1= new Log(810,260,300,PI/2)

box3= new Box(700,240,70,70)
box4= new Box(920,240,70,70)
pig2 = new Pig(810,220)



log2= new Log(810,180,300,PI/2)
box5= new Box(810,160,70,70)
log3= new Log(760,120,150,PI/7)
log4= new Log(870,120,150,-PI/7)

bird= new Bird(200,50)
slingshot= new Slingshot(bird.body,{x:200,y:50})

}



function draw(){

  background(bg)
noStroke()
fill("blue")
textSize(37)
text("score"+score,width-300,50)

Engine.update(engine)

ground.display()
platform.display()


box1.display()
box2.display()
pig1.display();
log1.display();

box3.display()
box4.display()
pig2.display();

log1.display();
log2.display();
box5.display();
log3.display();
log4.display();

bird.display();
slingshot.display()




}
function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly()
  gameState="launched"
}
function keyPressed(){
  if(keyCode==32){
    bird.trajectory=[]
    Matter.Body.setPosition(bird.body,{x:200,y:50})
    slingshot.attach(bird.body)
  }
}
