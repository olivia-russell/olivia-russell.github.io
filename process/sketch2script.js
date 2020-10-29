function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw() {
  fill(8, 126, 139);
  ellipse(mouseX, height / 2, mouseY / 2 + 10, mouseY / 2 + 10);
  fill(255, 90, 95);
  let inverseX = width - mouseX;
  let inverseY = height - mouseY;
  ellipse(inverseX, height / 2, inverseY / 2 + 10, inverseY / 2 + 10);
}
