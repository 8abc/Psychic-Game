var letters = [
  "a",
  "b",
  "c",
  "d",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// This counts for wins & losses
var wins = 0;
var losses = 0;
// This is how many guesses the player has left
var guessesLeft = 9;
// This is the letter the player needs to guess
var letterToGuess = null;
// Holds what we guess
var userAnswers = [];

var updateLetterToGuess = function() {
  // Get a random letterToGuess and assign it based on a random generator
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};
var updateGuessesLeft = function() {
  // Grab the HTML element and add guessesLeft.
  $("#guesses-left").html(guessesLeft);
};

var updateGuessesSoFar = function() {
  // Take what the player guesses, then display it as letters separated by commas.
  $("#userAnswers").html(userAnswers.join(", "));
};

//Reset game
var reset = function() {
  guessesLeft = 9;
  userAnswers = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

// Execute on page load.
updateLetterToGuess();
updateGuessesLeft();

// Capture the keyboard clicks.
document.onkeydown = function(event) {
  // It's going to reduce the guesses by one
  guessesLeft--;

  // Lowercase the letter
  var letter = event.key.toLowerCase();

  // Then add the guess to the userAnswers
  userAnswers.push(letter);

  // Then its going to run the update functions
  updateGuessesLeft();
  updateGuessesSoFar();

  // Check if there's a match.
  if (letter === letterToGuess) {
    alert("You have some psychic abilities, tell me the what's in the future.");
    // If there is then we win and we'll update the HTML to display the win.
    wins++;
    $("#wins").html(wins);

    // Then reset the game
    reset();
  }

  // If we are out of guesses...
  if (guessesLeft === 0) {
    // Then we will loss and we'll update the HTML to display the loss.
    losses++;
    alert("Aw, you're not psychic right now. Want to try again?");
    $("#losses").html(losses);

    // Then reset the game.
    reset();
  }
};
