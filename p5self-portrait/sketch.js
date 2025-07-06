function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('sketch-container');
  background(220);
}

function draw() {
  fill(255, 224, 189);
  ellipse(240, 200, 20, 30);
  ellipse(360, 200, 20, 30);

  fill(255, 224, 189);
  ellipse(300, 200, 120, 160);

  fill(50, 30, 20);
  arc(300, 150, 140, 100, PI, 0, CHORD);

  fill(0);
  ellipse(280, 190, 8, 8);
  ellipse(320, 190, 8, 8);

  stroke(0);
  strokeWeight(2);
  noFill();
  arc(300, 225, 60, 20, 0, PI);

  noStroke();
  fill(150, 180, 220);
  rect(250, 260, 100, 60);

  fill(50, 30, 20);
  triangle(260, 140, 235, 170, 275, 160);
  triangle(310, 120, 285, 180, 325, 160);
  triangle(355, 130, 330, 180, 365, 165);
}
