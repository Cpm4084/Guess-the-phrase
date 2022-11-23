let phrases = ['gold', 'yellow', 'turquoise', 'red'];
let guessOptions = ['constant', 'constant', 'letter', 'letter', 'letter', 'letter', 'two constants', 'two constants', 'two letters', 'nothing'];
let screen = 0;
let fourPlayerButton;
let twoPlayerButton;
let threePlayerButton;
let players;
let guess;
let curPhrase;
let curGuesses;
let playerTurn = 1;
let guessesDefined = false;
let wrongGuesses;
let guessCount = 0;
let matches = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
let playerThreeScore = 0;
let playerFourScore = 0;
let guessPhraseButton;

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
	print('guessesDefined = ' + guessesDefined);
	print('playerTurn = ' + playerTurn);
}

function selectRandomPhrase() {
	let index = Math.floor(random(0, phrases.length));
	//print("index is ", index);
	curPhrase = phrases[index];
	guess = [];
  wrongGuesses = [];
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
    //players guess
    playerGuess();
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
  textAlign(CENTER);
  //text underscores replacing letters
	text(guess.join(" "), width / 2, height / 2)
  text(wrongGuesses.join(" "), width / 2, height / 2 + 20);
  textAlign(LEFT);
	text(curGuesses, 30, 90);
  //create guess phrase button
  guessPhraseButton = createButton('Guess a phrase')
  guessPhraseButton.position(width - 150, height - 75); 

  //text players
  for(let i = 1; i-1 < players; i++) {
		text("player" + i,width - 100, 10 + i * 30);
  }

  for(let i = 1; i-1 < players; i++) {
    switch (i) {
      case 1:
        text(playerOneScore, width - 50, 10 + i * 30);
        break;
      case 2:
        text(playerTwoScore, width - 50, 10 + i * 30);
        break;
      case 3:
        text(playerThreeScore, width - 50, 10 + i * 30);
        break;
      case 4:
        text(playerFourScore, width - 50, 10 + i * 30);
        break;
      default:
    }
  }
  
  textAlign(LEFT);
  text("player" + playerTurn, 30, 30);
  text("Your Guesses", 30, 60);

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
  //Letter
  if (curGuesses == guessOptions[2,3,4,5] && key >= 'a' && key <= 'z' && guessesDefined) { 
		print("You guessed", key);
		
		// Find all instances of key in curPhrase
		let result = [];
		for(let i=0; i < curPhrase.length; i++) {
    	if (curPhrase[i] === key) {
				result.push(i);
				guess[i] = key;
        matches++;
        print(matches);
			}
		}
    
    
      if (result.length > 0) {
			// we found a match
			print("Found matches at indices", result);
		}
		else if (wrongGuesses.includes(key)) {
			print("You already guessed that");
      matches--;
		}
		else {
			wrongGuesses.push(key);
			print("NO MATCH!");
      matches--;
    }
      
      if (playerTurn == 1) {
        playerOneScore += (1 * matches);
        matches = 0;
      }
      else if (playerTurn == 2) {
        playerTwoScore += (1 * matches);
        matches = 0;
      }
      else if (playerTurn == 3) {
        playerThreeScore += (1 * matches);
        matches = 0;
      }
      else if (playerTurn == 4) {
        playerFourScore += (1 * matches);
        matches = 0;
      }
      playerTurn++;
        if (playerTurn > players) {
          playerTurn = 1;
        }
       guessesDefined = false;
  }
  //two letters
    if (curGuesses == guessOptions[8] && key >= 'a' && key <= 'z' && guessesDefined) { 
		print("You guessed", key);
		
		// Find all instances of key in curPhrase
		let result = [];
		for(let i=0; i < curPhrase.length; i++) {
    	if (curPhrase[i] === key) {
				result.push(i);
				guess[i] = key;
        matches++;
        print(matches);
			}
		}
    
    
      if (result.length > 0) {
			// we found a match
			print("Found matches at indices", result);
		}
		else if (wrongGuesses.includes(key)) {
			print("You already guessed that!");
      matches--;
		}
		else {
			wrongGuesses.push(key);
			print("NO MATCH!");
      matches--;
    }
      if (playerTurn == 1) {
        playerOneScore += (1 * matches);
        matches = 0;
      }
      else if (playerTurn == 2) {
        playerTwoScore += (1 * matches);
        matches = 0;
      }
      else if (playerTurn == 3) {
        playerThreeScore += (1 * matches);
        matches = 0;
      }
      else if (playerTurn == 4) {
        playerFourScore += (1 * matches);
        matches = 0;
      }
      guessCount++;
      if (guessCount % 2 == 0) {
        playerTurn++;
        guessesDefined = false;
      }
      if (playerTurn > players) {
          playerTurn = 1;
        }
  }
    //constant
    else if (curGuesses == guessOptions[0,1] && key >= 'a' && key <= 'z' && key != 'a' && key != 'e' && key != 'i' && key != 'o' && key != 'u' && guessesDefined) { 
		
      print("You guessed", key);
		
		// Find all instances of key in curPhrase
		let result = [];
		for(let i=0; i < curPhrase.length; i++) {
    	if (curPhrase[i] === key) {
				result.push(i);
				guess[i] = key;
        matches++;
        print(matches);
			}
		}
    
    
      if (result.length > 0) {
			// we found a match
			print("Found matches at indices", result);
		}
		else if (wrongGuesses.includes(key)) {
			print("You already guessed that!");
      matches--;
		}
		else {
			wrongGuesses.push(key);
			print("NO MATCH!");
      matches--;
		}
      if (playerTurn == 1) {
        playerOneScore += (1 * matches);
        matches = 0;
      }
      else if (playerTurn == 2) {
        playerTwoScore += (1 * matches);
        matches = 0;
      }
      else if (playerTurn == 3) {
        playerThreeScore += (1 * matches);
        matches = 0;
      }
      else if (playerTurn == 4) {
        playerFourScore += (1 * matches);
        matches = 0;
      }
      playerTurn++;
        if (playerTurn > players) {
          playerTurn = 1;
        }
       guessesDefined = false;
  }
      //two constants
    else if (curGuesses == guessOptions[6,7] && key >= 'a' && key <= 'z' && key != 'a' && key != 'e' && key != 'i' && key != 'o' && key != 'u' && guessesDefined) { 
		
      print("You guessed", key);
		
		// Find all instances of key in curPhrase
		let result = [];
		for(let i=0; i < curPhrase.length; i++) {
      if (guess[i] === key) {
        result.push(i);
        matches--;
        print("You already guessed that!");
      }
    	else if (curPhrase[i] === key) {
				result.push(i);
				guess[i] = key;
        matches++;
        print(matches);
			}
		}
    
    
      if (result.length > 0) {
			// we found a match
			print("Found matches at indices", result);
		}
		else if (wrongGuesses.includes(key)) {
			print("You already guessed that!");
      matches--;
		}
		else {
			wrongGuesses.push(key);
			print("NO MATCH!");
      matches--;
		}
      if (playerTurn == 1) {
        playerOneScore += (1 * matches);
        matches = 0;
      }
      else if (playerTurn == 2) {
        playerTwoScore += (1 * matches);
        matches = 0;
      }
      else if (playerTurn == 3) {
        playerThreeScore += (1 * matches);
        matches = 0;
      }
      else if (playerTurn == 4) {
        playerFourScore += (1 * matches);
        matches = 0;
      }
      guessCount++;
      if (guessCount % 2 == 0) {
        playerTurn++;
        guessesDefined = false;
      }
      if (playerTurn > players) {
          playerTurn = 1;
    }
  }
      //nothing
  else if (curGuesses == guessOptions[9] && key >= 'a' && key <= 'z') {
      playerTurn++;
        if (playerTurn > players) {
          playerTurn = 1;
        }
       guessesDefined = false;
  }
}

function playerGuess() {
  if(playerTurn == 1) {
    randomGuess();
    
  }
  if(playerTurn == 2) {
    randomGuess();
    
  }
  if(playerTurn == 3) {
    randomGuess();
    
  }
  if(playerTurn == 4) {
    randomGuess();
    
  }
}

function randomGuess() {
  if(!guessesDefined) {
   let guessIndex = Math.floor(random(0, guessOptions.length));
	    curGuesses = guessOptions[guessIndex];
    guessesDefined = true;
  }
}