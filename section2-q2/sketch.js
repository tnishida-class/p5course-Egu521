// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;

  for(let i = 0; i < 8; i++){
  for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)

  if ((i + j) % 2 == 0){
  fill(128);
  }
  else {
     noFill()
  }
  rect(size*i, size*j, size, size);


  if (j < 3 && (i + j) % 2 == 0) {
    fill(255, 0, 0);
  }

  else if (j < 5) {
    noFill();
    noStroke();
  }
  else if (j < 8 && (i + j) % 2 == 0) {
    fill(0, 0, 0);

  }

  circle(size*i + size/2 , size*j + size/2, size/1.1);
    }
  }
}
