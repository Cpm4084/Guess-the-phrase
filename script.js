let colorlist = ['gold', 'yellow', 'turquoise', 'red'];
let screen = 0;
let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (screen == 0) {
    startingScreen();
  } else if (screen == 1) {
    gameScreen();
  } else if (screen == 2) {
    endScreen();
  }
}

function startingScreen() {
  background(150,150,150);
  fill(0,0,0);
  button = createButton('1 Player');
  button.position(width / 2, height / 2);
  button.mousePressed(gameScreen);
}

function gameScreen() {
  background(50,50,50);
}

function endScreen() {
  background(100,50,50);
}