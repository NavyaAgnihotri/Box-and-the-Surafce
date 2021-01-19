var canvas;
var music;
var box , surface1 , surface2 , surface3, surface4;
var edgeSprite;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,500);

    //create 4 different surfaces
    surface1=createSprite(25,580,50,5);
    surface1.shapeColor="green";
    surface2=createSprite(75,580,50,5);
    surface2.shapeColor="pink";
    surface3=createSprite(125,580,50,5);
    surface3.shapeColor="yellow";
    surface4=createSprite(175,580,50,5);
    surface4.shapeColor="blue";

    //create box sprite and give velocity
     box=createSprite(random(20,450),15,15);
     box.shapeColor="white"
     box.velocityY=3;
     
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edgeSprite=createSprite();
    music.play();


    //add condition to check if box touching surface and make it box
    
    if (isTouching(box, surface1) ){
        box.shapeColor="green"
        box.velocityY=0;
        music.stop();
    }

    if (isTouching(box, surface2) ){
        box.shapeColor="pink"
        box.velocityY=0;
        music.stop();
    }

    if (isTouching(box, surface3) ){
        box.shapeColor="yellow"
        box.velocityY=0;
        music.stop();
    }

    if (isTouching(box, surface4) ){
        box.shapeColor="blue"
        box.velocityY=0;
        music.stop();
    }

    box.display();
    surface1.display();
    surface2.display();
    surface3.display();
    surface4.display();


}
