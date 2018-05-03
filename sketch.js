var flag = 0;

function setup(){

    createCanvas(2000,1000);
    background("indigo");

}


function draw(){
    
    if(mouseIsPressed){
        fill("indigo");
        noStroke();
    }
    ellipse(mouseX,mouseY,100,100);
}



function mouseMoved(){
    fill(random(255),random(255),random(255));
}



function keyPressed(){
    if(keyCode===RIGHT_ARROW || keyCode===LEFT_ARROW){
        background(random(255),random(255),random(255));
    }
    if(keyCode==DOWN_ARROW){
        clear();
        setup();
    }
}