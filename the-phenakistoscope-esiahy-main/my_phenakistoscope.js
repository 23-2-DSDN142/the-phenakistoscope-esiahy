const SLICE_COUNT = 7;
let pScope; // Declare a variable to hold the pScope object

function setup() {
  createCanvas(800, 600); // Adjust canvas size as needed
  pScope = new pScopeLibrary(); // Replace "pScopeLibrary" with the actual library you're using
  setup_pScope(pScope);
  setup_layers(pScope);
}

function setup_pScope(pScope) {
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("redSharingan", "png", 1);
  pScope.load_image_sequence("guyRunning", "png", 11);
  pScope.load_image_sequence("rainCloud", "png", 7);
  pScope.load_image_sequence("rainCloud", "png", 7);
  
  
}


function setup_layers(pScope) {
  new PLayer(null, 173, 216, 230); // Lets us draw the whole circle background, ignoring the boundaries

  
  var skyrain = new PLayer(rain);
  skyrain.mode(SWIRL(2));
  skyrain.set_boundary(800, 200);

  var Groundfloor = new PLayer(ground);
  Groundfloor.set_boundary(150, 200);

  var background = new PLayer(backgroundfunc);
  background.set_boundary(15, 200);

  var background = new PLayer(backgroundfunc2);
  background.set_boundary(15, 200);

  var background = new PLayer(backgroundfunc3);
  background.set_boundary(15, 200);

  var background = new PLayer(backgroundfunc4);
  background.set_boundary(15, 200);

  var background = new PLayer(backgroundfunc5);
  background.set_boundary(15, 200);

  var background = new PLayer(backgroundfunc6);
  background.set_boundary(15, 200);


  var manrunning = new PLayer(manload);
  manrunning.mode(RING);
  manrunning.set_boundary(1500, 1100);

var redSharingan = new PLayer(redSharinganfunc);
redSharingan.mode(RING);
redSharingan.set_boundary(15, 11); 

var rainCloud = new PLayer(rainCloudfunc);
rainCloud.mode(RING);
rainCloud.set_boundary(15, 10); 


}

function rain(x, y) {
  push();
  fill(40, 100, 200);
  ellipse(15, 5, 40, 40);
  pop();
}

function ground() {
  push();
  fill(0, 1, 0);
  ellipse(0, 0, 600, 600);
  pop();
}


function backgroundfunc() {
  push();
  fill(100, 150, 0);
  ellipse(0, 0, 600, 600);
  pop();
}

function backgroundfunc2() {
  push();
  fill(0, 0, 0);
  ellipse(0, 0, 400, 400);
  pop();
}

function backgroundfunc3() {
  push();
  fill(145, 216, 230);
  ellipse(0, 0, 1250, 1250);
  pop();
}

function backgroundfunc4() {
  push();
  fill(75, 200, 220);
  ellipse(0, 0, 900, 900);
  pop();
}

function backgroundfunc5() {
  push();
  fill(0,154,23);
  ellipse(0, 0, 600, 600);
  pop();
}

function backgroundfunc6() {
  push();
  fill(0,0,0);
  ellipse(0, 0, 400, 400);
  pop();
}



function manload(x, y, animation, pScope) {
  push();
  scale(-1, 1);
  scale(1.0);
  rotate(0);
  pScope.draw_image_from_sequence("guyRunning", -15, -450, animation.frame);
  pop();


}



function redSharinganfunc(x, y, animation, pScope) {
  push();
  scale(-1, 1);
  scale(1.9);
  rotate(0);
  pScope.draw_image_from_sequence("redSharingan", -0, -0, animation.frame);
  pop();


}




function rainCloudfunc(x, y, animation, pScope) {
  push();
  scale(-1, 1);
  scale(3.2);
  rotate(50);
  pScope.draw_image_from_sequence("rainCloud", -20, -280, animation.frame);
  pop();
}


function draw() {
  // Draw background image here if loaded
  push();
  scale(4);
  pScope.draw_image("rainCloud_0", 0, 170);
  pop();


}




function draw() {
  // Draw background image here if loaded
  push();
  scale(4);
  pScope.draw_image("redSharingan_0", 0, 170);
  pop();
}