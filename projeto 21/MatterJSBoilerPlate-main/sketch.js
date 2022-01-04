const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let mundo;
var paredeEsquerda;
var radius =40;
var paredeDireita;
var bola;
var chao;
var angulo=60;
var poly;


function setup() {
  createCanvas(1600,700)

  engine = Engine.create();
  mundo = engine.world;


  var bola_propriedades = {
    isStatic:false,
    restitution: 0.3,
    friction:0,
    density:1.2
  }
   

  bola = Bodies.circle(200,340,radius/2,bola_propriedades);
  World.add(mundo,bola);

  chao = new Chao(width/2,670,width,20);
  paredeEsquerda = new Chao(1100,600,20,120)
  paredeDireita = new Chao(1350,600,20,120)
  
  rectMode(CENTER);
  Engine.run(engine)
}


function draw() {
  background(51);
  Engine.update(engine);

  ellipse(bola.position.x,bola.position.y,radius,radius);

  keyPressed();

  chao.display();
  paredeEsquerda.display();
  paredeDireita.display();

}
function keyPressed(){
    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(bola,bola.position,{x:85,y:-85,})
    }
}