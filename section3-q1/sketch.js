// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
const g=1
function setup(){
  createCanvas(1000, 1000);
  count = 0;
  cycle = 100;

}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  if (count < 50) {ellipse(width / 2, height / 2, count);

  }// BLANK[1]
else {
  ellipse(width / 2, height / 2,  100 - count);
}
if(keyIsDown(LEFT_ARROW)){ width -= 10; }
if(keyIsDown(RIGHT_ARROW)){width += 10; }
}
