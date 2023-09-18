const SLICE_COUNT = 7;
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
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);

  // Load images if your library supports it
  //pScope.load_image("caveBack_0", "jpg");
  //pScope.load_image_sequence("manRun0", "png", 7);
}

function setup_layers(pScope) {
  new PLayer(null, 200); // Lets us draw the whole circle background, ignoring the boundaries

  var Groundspikes = new PLayer(rocks);
  Groundspikes.mode(SWIRL(1));
  Groundspikes.set_boundary(1400, 400);

  var Groundfloor = new PLayer(ground);
  Groundfloor.set_boundary(1500, 200);

  var manrunning = new PLayer(manload);
  manrunning.mode(RING);
  manrunning.set_boundary(1000, 200);
}

function rocks(x, y) {
  push();
  fill(100, 90, 150);
  triangle(10, 0, 50, 200, 90, 0);
  pop();
}

function ground() {
  push();
  fill(100, 100, 240);
  ellipse(0, 0, 600, 600);
  pop();
}

function manload(x, y, animation, pScope) {
  push();
  scale(-1, 1);
  scale(1.5);
  rotate(18);
  //pScope.draw_image_from_sequence("manRun0", -45, -250, animation.frame);
  pop();
}

function draw() {
  // Draw background image here if loaded
  push();
  scale(4);
  pScope.draw_image("caveBack_0", 0, 170);
  pop();
}