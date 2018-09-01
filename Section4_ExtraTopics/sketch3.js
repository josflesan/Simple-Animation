var particles = [];

function setup() {
  createCanvas(600, 600);
}

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
}

function draw() {
  background(200);
  for (particle of particles) {
    particle.update();
    particle.show();
  }

  // line(frameCount, 0, frameCount, height);
}
