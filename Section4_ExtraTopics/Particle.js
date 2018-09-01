/* LOOKING AT DRAWING OBJECT TRAILS
*/

function Particle(x, y) {
  this.x = x;
  this.y = y;

  this.history = [];

  this.update = function() {
    this.y += random(-15, 15);
    this.x += random(-10, 10);

    for (var i = 0; i < this.history.length; i++) {
      this.history[i].x += random(-1, 1);
      this.history[i].y += random(-1, 1);
    }

    var v = createVector(this.x, this.y);
    this.history.push(v);

    if (this.history.length > 100) {
      this.history.splice(0, 1);
    }
  }

  this.show = function() {
    stroke(0);
    fill(55);

    noFill();
    beginShape();
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i];
      vertex(pos.x, pos.y);
      // fill(random(255), random(255), random(255));
      // ellipse(pos.x, pos.y, i);
    }
    endShape();

    fill(12),
    ellipse(this.x, this.y, 20);

  }
}
