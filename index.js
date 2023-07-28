const readline = require('readline').createInterface ({
    input: process.stdin,
  output: process.stdout,
});


console.log('Hello! Welcome to roll a dice!')
playGame()

function computer() {
    return Math.floor(Math.random() * 6) + 1;
}

function user() {
    return Math.floor(Math.random() * 6) + 1;
}

function playGame () {
    readline.question('Ready? y/n: ', (answer) => {
        const computerChoice = computer();
        const userChoice = user();
        
        if (answer.toLocaleLowerCase() === 'y') {
            console.log(`Computer rolled a ${computerChoice}!`),
            console.log(`You rolled a ${userChoice}!`)

            if (computerChoice === userChoice) {
                result = "It's a draw."
                scoresDraws++;
            } else if (computerChoice < userChoice) {
                result = "You win!"
                scoresWins++;
            } else if (computerChoice > userChoice) {
                result = "Computer wins!"
                scoresLoses++;    
            }
            
            console.log('Current scores user wins ' + scoresWins + ', user loses ' + scoresLoses + ', draws ' + scoresDraws);
            playAgain()
            } else if (answer.toLocaleLowerCase() === 'n') {
                readline.close();
                console.log('Thanks for playing!');
            } else {
                console.log('Invalid input. Please try again.');
                playGame();
        }
    })  
}

let scoresWins = 0;
let scoresLoses = 0;
let scoresDraws = 0;

function continueGame (answer) {
    const computerChoice = computer();
    const userChoice = user();
        
        if (answer.toLocaleLowerCase() === 'y') {
            console.log(`Computer rolled a ${computerChoice}!`),
            console.log(`You rolled a ${userChoice}!`)

            if (computerChoice === userChoice) {
                result = "It's a draw."
                scoresDraws++;
            } else if (computerChoice < userChoice) {
                result = "You win!"
                scoresWins++;
            } else if (computerChoice > userChoice) {
                result = "Computer wins!"
                scoresLoses++;    
            }
            
            console.log('Current scores user wins ' + scoresWins + ', user loses ' + scoresLoses + ', draws ' + scoresDraws);
            playAgain()
}}

function playAgain() {
    readline.question('Play again? (y/n): ', (answer) => {
      if (answer.toLowerCase() === 'y') {
        continueGame(answer);
      } else if (answer.toLowerCase() === 'n') {
        readline.close();
        console.log('Thanks for playing!');
      } else {
        console.log('Invalid input. Please try again.');
        playAgain();
      }
    });
  }

