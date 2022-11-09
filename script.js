let colorlist = ['gold', 'yellow', 'turquoise', 'red'];
let screen = 0;
let onePlayerButton;
let twoPlayerButton;
let threePlayerButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
	threePlayerButton = createButton('3 Players');
  threePlayerButton.position(width / 2, height / 2 + 50);
	twoPlayerButton = createButton('2 Players');
  twoPlayerButton.position(width / 2, height / 2);
	onePlayerButton = createButton('1 Player');
  onePlayerButton.position(width / 2, height / 2 - 50);
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
  onePlayerButton.mousePressed(() => {
    screen = 1
		hideButtons();
  });
  twoPlayerButton.mousePressed(() => {
    screen = 1
		hideButtons();
  });
  threePlayerButton.mousePressed(() => {
		screen = 1
		hideButtons();
	});
}

function gameScreen() {
  background(50,50,50);
}

function endScreen() {
  background(100,50,50);
}

function hideButtons() {
	onePlayerButton.hide();
  twoPlayerButton.hide();
  threePlayerButton.hide();
}