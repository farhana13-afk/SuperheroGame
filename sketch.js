const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 

function preload() {
//preload the images here
   bgImg = loadImage("images/GamingBackground.png");
   mImg1 = loadImage("images/Monster-01.png");
   mImg2 = loadImage("images/Monster-02.png");
   sImg1 = loadImage("images/Superhero-01.png");
   sImg2 = loadImage("images/Superhero-02.png");
}

function setup() {
  createCanvas(1900, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(675, 700);
  hero = new Hero(500, 400, 500, 300);
  string = new Fly(hero.body,{x:500, y:200});
  box1 = new Box(875, 625);
  box2 = new Box(875, 550);
  box3 = new Box(875, 475);
  box4 = new Box(875, 400);
  box5 = new Box(875, 325);
  box6 = new Box(875, 250);
  box7 = new Box(875, 175);

  box8 = new Box(980, 625);
  box9 = new Box(980, 550);
  box10 = new Box(980, 475);
  box11 = new Box(980, 400);
  box12 = new Box(980, 325);
  box13 = new Box(980, 250);

  box14 = new Box(1085, 625);
  box15 = new Box(1085, 550);
  box16 = new Box(1085, 475);
  box17 = new Box(1085, 400);
  box18 = new Box(1085, 325);
  box19 = new Box(1085, 250);
  box20 = new Box(1085, 175);

  monster = new Monster(1300, 550, 300, 300);
}

function draw() {
  background(bgImg);
  Engine.update(engine);

  ground.display();
  hero.display();
  string.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display(); 

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display(); 

  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display(); 

  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}

