/* MINIMUM SPANNING TREE USING PRIM'S ALGORITHM + NAMESPACING/ INSTANCE MODE IN P5
*/

// NAMESPACING CONCEPT - create template, then create sketch

var sketch = function(p) {
  p.x = 100;
  p.y = 100;

  p.setup = function() {
    p.createCanvas(200, 200);
    p.background(51);
  }

  p.draw = function() {
    p.fill(56, 45, 123, 45);
    p.noStroke();
    p.ellipse(p.x, p.y, 50, 50);

    p.x += random(-10, 10);
    p.y += random(-10, 10);
  }
}

var myp5 = new p5(sketch);
var myp52 = new p5(sketch);

function resetBackground() {
  myp5.x = myp5.width/2;
  myp5.y = myp5.height/2;
  myp5.background(51);
}

setInterval(resetBackground, 3000);

/*PRIM'S ALGORITHM*/

var vertices = [];

function setup() {
  createCanvas(640, 360);

  var button = createButton("RESET");
  button.position(580, 370);
  button.mousePressed(resetSketch);
}

function resetSketch() {
  background(51);
  vertices = [];
}

function mousePressed() {
  if ((mouseX < 640 && mouseX > 0) && (mouseY < 360 && mouseY > 0)) {
    var v = createVector(mouseX, mouseY);
    vertices.push(v);
  }
}

function draw() {

  background(51);

  var reached = [];
  var unreached = [];

  for (var i = 0; i < vertices.length; i++) {
    unreached.push(vertices[i]);
  }

  reached.push(unreached[0]);
  unreached.splice(0, 1);

  while (unreached.length > 0) {
    var record = 100000;
    var rIndex;
    var uIndex;

    for (var i = 0; i < reached.length; i++) {
      for (var j = 0; j < unreached.length; j++) {
        var v1 = reached[i];
        var v2 = unreached[j];
        var d = dist(v1.x, v1.y, v2.x, v2.y);

        if (d < record) {
          record = d;
          rIndex = i;
          uIndex = j;
        }
      }
    }

    line(reached[rIndex].x, reached[rIndex].y, unreached[uIndex].x, unreached[uIndex].y);
    reached.push(unreached[uIndex]);
    unreached.splice(uIndex, 1);
  }

  for (var i = 0; i < vertices.length; i++) {
    fill(255);
    stroke(255);
    strokeWeight(2);
    ellipse(vertices[i].x, vertices[i].y, 16, 16);
  }

}
