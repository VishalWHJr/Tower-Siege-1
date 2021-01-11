
const World= Matter.World;
const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15,v16;
var ground1,ground2,ground3;
var box, ball;
var sling;
var gameState=0;
var play=0;
var released=1;

function setup(){
    var canvas = createCanvas(1000,650);
    engine = Engine.create();
    world = engine.world;

    ball=new Ball(200,415,40,40);

    // base.
    b1=new Box(540,405,30,40);
    b2=new Box(570,405,30,40);
    b3=new Box(600,405,30,40);
    b4=new Box(420,405,30,40);
    b5=new Box(450,405,30,40);
    b6=new Box(480,405,30,40);
    b7=new Box(510,405,30,40);
    // 1st floor
    b8=new Box(510,375,30,40);
    b9=new Box(540,375,30,40); 
    b10=new Box(570,375,30,40);
    b11=new Box(450,375,30,40);
    b12=new Box(480,375,30,40);
    //2nd floor
    b13=new Box(480,335,30,40);
    b14=new Box(510,335,30,40);
    b15=new Box(540,335,30,40);
    //3rd floor
    b16=new Box(510,295,30,40);

    //base for another blocks
    
    v1=new Box(720,285,30,40);
    v2=new Box(750,285,30,40);
    v3=new Box(780,285,30,40);
    v4=new Box(810,285,30,40);
    v5=new Box(840,285,30,40);
    v6=new Box(870,285,30,40);
    v7=new Box(900,285,30,40);
    v8=new Box(750,245,30,40);
    v9=new Box(780,245,30,40);
    v10=new Box(810,245,30,40);
    v11=new Box(840,245,30,40);
    v12=new Box(870,245,30,40);
    v13=new Box(780,205,30,40);
    v14=new Box(810,205,30,40);
    v15=new Box(840,205,30,40);
    v16=new Box(810,165,30,40);

    // making sling 
    sling=new Sling(ball.body,{x:200,y:415})

    // making ground
    ground1=new Ground(width/2,height-25,width,20);
    ground2=new Ground(b7.body.position.x,b7.body.position.y+20,230,20);
    ground3=new Ground(b14.body.position.x+300, b14.body.position.y-30,230,20)

}

function draw(){
    background("white");
    Engine.update(engine);

    ball.display();
    //base
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    //1st floor
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    //2nd floor
    b13.display();
    b14.display();
    b15.display();
    b16.display();

    //base 
    v1.display();
    v2.display();
    v3.display();
    v4.display();
    v5.display();
    v6.display();
    v7.display();
    v8.display();
    v9.display();
    v10.display();
    v11.display();
    v12.display();
    v13.display();
    v14.display();
    v15.display();
    v16.display();

    //sling
    sling.display();

    // ground
    ground1.display();
    ground2.display();
    ground3.display();

}

    function mouseDragged(){
        if(gameState===play){
        Body.setPosition(ball.body,{x:mouseX,y:mouseY})
        }
    }

    function mouseReleased(){
        sling.fly();
        gameState=released
    }

    function keyPressed(){
        if(keyCode===32 &&    gameState===released){
            Body.setPosition(ball.body,{x:200,y:415})
            sling.attach(ball.body);
            gameState=play;
        }
    }