function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  planets.push(new planet(color(112,16,16), 15,60,2));
  planets.push(new planet(color(188,66,66), 20,80,1.75));
  planets.push(new planet(color(88,117,188), 20,100,1.5));
  planets.push(new planet(color(255,0,0), 15,120,1.25));
  planets.push(new planet(color(224,187,132), 35,150,1));
  planets.push(new planet(color(255,240,219), 20,180,0.75));
  planets.push(new planet(color(66,140,214), 20,200,0.5));
  planets.push(new planet(color(67,125,135), 20,220,0.25));
  planets.push(new planet(color(136,146,147), 5,230,0.1));
}

function draw() {
  background(220);
}
var planets = []; 
var planet = function(color, size, position, speed){
    this.color = color;
    this.size = size;
    this.x = 0;
    this.y = position;
    this.rotation = 0; 
    this.speed = speed;
    
};

var drawPlanets= function(){
    for(var i = 0; i< planets.length; i++){
        translate(200,200);
        rotate(planets[i].rotation);
        planets[i].rotation += planets[i].speed;
        fill(planets[i].color);
        ellipse(0,planets[i].y,planets[i].size, planets[i].size);
        resetMatrix();
    }
};

var draw= function(){
    background(0);
    fill(255,255,0);
    ellipse(200,200,100,100);
    drawPlanets();
};