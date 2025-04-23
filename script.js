// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;
let timeInterval = setInterval(updateTime, 1000);

function GetrandomWord() {
    return words[Math.floor(Math.random() * words.lenght)];
}

function addWord() {
    getWord = GetrandomWord();
    word.innerHTML = getWord; 
}

function updateScore() {
    score++;
    scoreElement.innerText = score
}

textInput.addEventListener("input", (event) => {
    const Text = event.target.value;
    if(Text === getWord) {
        addWord();

        updateScore();
    }
})


//Time
function updateTime() {
   time--;

    timeElement.innerHTML = time + "s";
    if (time === 0) {
        clearInterval(timeInterval);
    }
    gameOver();

}
