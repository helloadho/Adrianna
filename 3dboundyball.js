function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
}
var ball = function(){
    this.x = 200;
    this.y = 200;
    this.z = 1;
    this.size = 50;
    this.xspeed = 2;
    this.yspeed = 4;
    this.zspeed = 0.5;
};
var myBall = new ball();

var drawScene = function(){
    background(0);
    stroke(255);
    fill(0);
    rect(40,40,320,320);
    line(0,0,40,40);
    line(360,360,400,400);
    line(360,40,400,0);
    line(0,400,40,360);
};

var moveBall = function(){
   if(myBall.z >40 || myBall.z <0 ){
       myBall.zspeed = -myBall.zspeed;
   } 
   if(myBall.x <0 + myBall.z || myBall.y >400 - myBall.z){
       myBall.xspeed = -myBall.xspeed;
   } 
   if(myBall.y <0 + myBall.z || myBall.y>400 - myBall.z){
       myBall.yspeed = -myBall.yspeed;
   }
   myBall.x += myBall.xspeed;
   myBall.y += myBall.yspeed;
   myBall.z += myBall.zspeed;
};
var drawBall = function(){
   fill(129);
   ellipse(myBall.x, 400-myBall.z, myBall.size-myBall.z, 10-(myBall.z/5));
   fill(255);
   ellipse(myBall.x, myBall.y, myBall.size - myBall.z, myBall.size - myBall.z);
   fill(129);
   ellipse(myBall.y, 400-myBall.z, myBall.size-myBall.z, 10-(myBall.z/5));
   fill(255);
   ellipse(myBall.y, myBall.y, myBall.size - myBall.z, myBall.size - myBall.z);
};
var draw = function(){
   // ball();
    drawScene();
    moveBall();
    drawBall();
};