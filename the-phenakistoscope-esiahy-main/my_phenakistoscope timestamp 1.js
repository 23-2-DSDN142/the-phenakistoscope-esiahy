const SLICE_COUNT = 8;
let pScope; // Declare a variable to hold the pScope object

function setup() {
  createCanvas(800, 600); // Adjust canvas size as needed
  pScope = new pScopeLibrary(); // Replace "pScopeLibrary" with the actual library you're using
  setup_pScope(pScope);
  setup_layers(pScope);
}

function setup_pScope(pScope) {
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);

  // Load images if your library supports it
  //pScope.load_image("moonGlow_0", "png");
  pScope.load_image_sequence("guyRunning", "png", 10);
}

function setup_layers(pScope) {
  new PLayer(null, 80); // Lets us draw the whole circle background, ignoring the boundaries

  var Groundspikes = new PLayer(rocks);
  Groundspikes.mode(SWIRL(1));
  Groundspikes.set_boundary(1400, 400);

  var Groundfloor = new PLayer(ground);
  Groundfloor.set_boundary(150, 200);

  var manrunning = new PLayer(manload);
  manrunning.mode(RING);
  manrunning.set_boundary(1500, 1100);
}

function rocks(x, y) {
  push();
  fill(100, 100, 100);
  ellipse(0, 10, 550, 55);
  pop();
}

function ground() {
  push();
  fill(100, 100, 100);
  ellipse(0, 0, 600, 600);
  pop();
}

function ground() {
  push();
  fill(5, 100, 40);
  ellipse(0, 0, 600, 600);
  pop();
}

function manload(x, y, animation, pScope) {
  push();
  scale(-1, 1);
  scale(1.5);
  rotate(18);
  pScope.draw_image_from_sequence("guyRunning", -65, -350, animation.frame);
  pop();
}

function draw() {
  // Draw background image here if loaded
  push();
  scale(4);
  pScope.draw_image("caveBack_0", 0, 170);
  pop();
}