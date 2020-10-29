function setup() {
createCanvas(600, 400);
}
function draw() {
if (mouseIsPressed) {
let c = color(145, 61, 136, );
fill(c);
} else {
fill(255);
}
ellipse(mouseX, mouseY, 80, 80);
}
