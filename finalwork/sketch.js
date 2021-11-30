// 最終課題を制作しlet circle
var y = 500;
var a = 300;
var b = 200;
var c = 0;
let cloudx = 100;
let cloudy = 100;
function setup(){
createCanvas(600 , 600);
angleMode(DEGREES);

}

function draw(){

background(72, 188, 212);


makeCloud(cloudx, cloudy);
makeCloud(cloudx + 100, cloudy + 100);

fill(a, b, c);
stroke(255);
triangle(100, y, 300, y, 200, y + 150);
arc (200, y, 200, 200, 180, 360);
triangle(200, y + 150, 190, y + 170, 210, y + 170);
line(200, y + 170, 200, y + 250);
y-=5;
if(y < -250) {
  y=600
  a = random(0, 255);
  b = random(0, 255);
  c = random(0, 255);
}

if(keyIsDown(UP_ARROW)){ y -= 10; }
if(keyIsDown(DOWN_ARROW)){ y += 6; }

cloudx += 0.2;


}

function makeCloud(cloudx, cloudy){
fill(250);
noStroke();
ellipse(cloudx, cloudy, 70, 50);
ellipse(cloudx + 10, cloudy + 10, 70 ,50);
ellipse(cloudx - 20, cloudy + 10, 70, 50);
}
