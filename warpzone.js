function setup() {
  createCanvas(1425, 400);
}

function draw() {
  background(220);
}
var lines = [];
var index = 0;

var myLine = function(y,length){
    this.x = -length;
    this.y = y;
    this.length = length;
    this.speed = random(1,14);
    this.weight = random(1,4);
    this.color = color(random(0,255),0,0);
    
};
var createLine = function(){
    lines[index] = new myLine (random(0,400), random(10,400));
    index += 1;
    if (index > 600){
    index = 0;
    }
};

var drawLines = function(){
    for(var i = 0; i < lines.length;i++){
        stroke(lines[i].color);
        strokeWeight(lines[i].color);
        line(lines[i].x, lines[i].y, lines[i].x+lines.length, lines[i].y);
        lines[i].x += lines[i].speed;
    }
};

var draw = function(){
    background(0);
    createLine();
    drawLines();
};