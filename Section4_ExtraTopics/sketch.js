/* TRANSFORMATIONS (translate(x, y), rotate(angle), scale(*x, *y), push(), pop()), angleMode(),
rectMode()
NOTES:
1. Rotation always relative to origin,
2. push() === SAVE, pop() === RESTORE -> push()...pop() is a block of self sustained transformation
3. You can use -ve to flip the 'grid'
4. PUSH and POP refer to elements saved in a STACK, not a QUEUE
*/

/* VARIABLES FOR animation1()
let angle = 0;
let angle2 = 0;
let x = 50;
let y = 50;
*/

/* VARIABLE FOR animation2()
let angle = 0;
*/

let angle = 0;

function setup() {
	createCanvas(400, 400);
	angleMode(DEGREES);
	// rectMode(CENTER);
}

function draw() {
	background(0);
	// animation1();
	// animation2();
	solarsystem();
}

function animation1() {
	push();
	translate(x, y);
	rotate(angle);
	fill(255, 30, 20);
	rect(0, 0, 100, 50);
	pop();

	translate(300, 300);
	rotate(-angle * 3);
	fill(100, 34, 255);
	rect(0, 0, 100, 50);

	angle += 5;
	angle2 += 2;
}

function animation2() {
	push();
	translate(width/2, height/2);
	scale(1, 1);
	rotate(angle);
	// scale(mouseX / 100, mouseY / 100);
	stroke(255);
	strokeWeight(2);
	fill(122);
	rect(0, 0, 100, 50);
	pop();

	angle += 2;
}

function solarsystem() {
	push();
	translate(width/2, height/2);
	scale(0.5);
	noStroke();
	fill(156, 132, 34);
	ellipse(0, 0, 100, 100);

	push();
	rotate(angle);
	fill(23, 123, 255);
	ellipse(-300, 0, 40, 40);

	translate(-300, 0);
	rotate(-angle*2);
	fill(145);
	ellipse(-50, 0, 20, 20);
	pop();

	pop();

	angle += 1.5;
}
