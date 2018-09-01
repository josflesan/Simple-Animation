/* TIME IN NATIVE JS (setTimeout(function, time in ms), setInterval(function, time in ms,
clearInterval())), ANONYMOUS FUNCTIONS, frameCount, JS CLOSURES
NOTES:
1. setInterval() creates a Js object containing useful info
*/

var x = 0;

var timer1;
var timer2;
var interval;
var button;
var started = false;

function setup() {
  createCanvas(200, 200);
  // setTimeout(anonymous, 1000);
  timer1 = createP('timer 1');
  timer2 = createP('timer 2');

  makeTime(timer1, 500);
  makeTime(timer2, 1000);
  // button = createButton('start timer');
  // button.mousePressed(doTimer);
}

function makeTime(elt, time) {
  var counter = 0;
  setInterval(timeIt, time);
  function timeIt() {
    // started = true;
    elt.html(counter);
    counter++;
  }
}

function doTimer() {
  if (started) {
    counter = 0;
    timer.html('timer');
    button.html('start timer');
    clearInterval(interval);
    started = false;
  } else {
    button.html('stop timer');
    interval = setInterval(timeIt, 500);
  }

}

// function stopTimer() {
//   clearInterval(interval);
// }

// function anonymous() {
//   createP('anonymous');
//   setTimeout(anonymous, 1000);
// }

function draw() {
  background(51);
  stroke(255);
  line(x, 0, x, height);

  x += 3;
  if (x > width) {
    x = 0;
  }
}
