const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var bgImage;
var leftboy,  boy1Image;
var ball;
var engine, world;
var leftsling;
var part1, part2, part3, part4, part5, part6, part7;
var count = 0;
var gameState = "start";


function preload(){
bgImage = loadImage("images/bgImage.png")

boy1Image = loadImage("images/leftboy.png")

}

function setup() {
  createCanvas(1670,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width*2,20);
                                
  leftboy = createSprite(300,600,20,20)
  leftboy.addImage("boy1",boy1Image)
  leftboy.scale=0.6;
  
 ball = new Ball(340,600)

  leftsling = new Sling(ball.body,{x:340, y:600});
  
  
  part1 = createSprite(890,780,80,20)
  part2 = createSprite(960,780,80,20)
  part3 = createSprite(1040,780,80,20)
  part4 = createSprite(1120,780,80,20)
  part5 = createSprite(1200,780,80,20)
  part6 = createSprite(1280,780,80,20)
  part7 = createSprite(1360,780,80,20)

   for (var k = width/2 + 10; k <=width/2+600; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    
}

function draw() {
  background(bgImage);


  textSize(50)
  fill("black")
  text("Score : "+score,1400,60);
 textSize(30)
 text("20",870,760)
 text("40",950,760)
 text("60",1030,760)
 text("100",1100,760)
 text("60",1190,760)
 text("40",1270,760)
 text("20",1340,760)
 
  Engine.update(engine);
  ground.display();
  leftboy.display();
  part1.display();
 part2.display();
 part3.display();
 part4.display();
 part5.display();
 part6.display();
 part7.display();

ball.display();
leftsling.display();


   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

   if(ball.body.position.x>(width/2+10)&&ball.body.position.x<(width/2+610)&&ball.body.position.y>(height-divisionHeight/2)){
   
  if(ball.body.position.x<part1.x){
    score = score+20;
    ball = null
    
    }
    else if(ball.body.position.x<part2.x){
      score= score+40;
      ball = null
      if(count>=5){
        gameState = "end"
      }
    }
    else if(ball.body.position.x<part3.x){
      score= score+60;
      ball = null
      if(count>=5){
        gameState = "end"
      }
    }
    else if(ball.body.position.x<part4.x){
      score= score+100;
      ball = null
      if(count>=5){
        gameState = "end"
      }
    }
    else if(ball.body.position.x<part5.x){
      score= score+60;
      ball = null
      if(count>=5){
        gameState = "end"
      }
    }
    else if(ball.body.position.x<part6.x){
      score= score+40;
      ball = null
      if(count>=5){
        gameState = "end"
      }
    }
    else{
      score= score+20;
      ball = null
      if(count>=5){
        gameState = "end"
      }
    }
  }
  

   }

  


function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  //}
}
function mouseReleased(){
  leftsling.fly();
  
}

function keyPressed(){
  if(keyCode === 32){
  if(gameState !== "end"){
    count++
    ball = new Ball(340,600)
    leftsling.attach(ball.body)
  }
}
}

