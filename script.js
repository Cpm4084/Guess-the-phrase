let phrases = ['gold', 'yellow', 'turquoise', 'red'];
let screen = 0;
let fourPlayerButton;
let twoPlayerButton;
let threePlayerButton;
let players;
let guess;
let curPhrase;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //create four player button
	fourPlayerButton = createButton('4 Players');
  fourPlayerButton.position(width / 2, height / 2 + 50);
  //create three player button
	threePlayerButton = createButton('3 Players');
  threePlayerButton.position(width / 2, height / 2);
  //create two player button
	twoPlayerButton = createButton('2 Players');
  twoPlayerButton.position(width / 2, height / 2 - 50);
  selectRandomPhrase();
}

function selectRandomPhrase() {
	let index = Math.floor(random(0, phrases.length));
	print("index is ", index);
	curPhrase = phrases[index];
	guess = [];
	for(let i = 0; i < curPhrase.length; i++) {
		guess.push(curPhrase[i] == " " ? " " : "_")
		print(i, guess[i]);
	}
}

function draw() {
  if (screen == 0) {
    //starting screen
    startingScreen();
  } else if (screen == 1) {
    //game screen
    gameScreen();
  } else if (screen == 2) {
    //end screen - might not need
    endScreen();
  }
}

function startingScreen() {
  background(150,150,150);
  fill(0,0,0);
  //switch to game with two players
  twoPlayerButton.mousePressed(() => {
    screen = 1
    players = 2
		hideButtons();
  });
  //switch to game with three players
  threePlayerButton.mousePressed(() => {
    screen = 1
    players = 3
		hideButtons();
  });
  //switch to game with four players
  fourPlayerButton.mousePressed(() => {
		screen = 1
    players = 4
		hideButtons();
	});
}

function gameScreen() {
  background(50,50,50);
  text(curPhrase, 100, 100);
	text(guess.join(" "), 100, 150)
}

function endScreen() {
  background(100,50,50);
}

function hideButtons() {
  //hide buttons
	twoPlayerButton.hide();
  threePlayerButton.hide();
  fourPlayerButton.hide();
}

function keyPressed() {
  if (screen == 1 && key >= 'a' && key <= 'z') { 
		print("You guessed", key);
		
		// Find all instances of key in curPhrase
		let result = [];
		for(var i=0; i < curPhrase.length; i++) {
    	if (curPhrase[i] === key) {
				result.push(i);
				guess[i] = key;
			}
		}
  }
}