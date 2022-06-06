function setup() {
  
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-holder');
}

var draw = function(){
    
    background(255);
    strokeWeight(20);
    ellipse (200,200,300,300);
    bezier (100,220,100,mouseX,300,mouseY,300,220);
    strokeWeight(40);
    point(150,map(mouseY, 0, 400, 100, 200));
    point(250,map(mouseY, 0, 400, 100, 200));
};