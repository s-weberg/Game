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

//Initializing words
let randomWord;


//Initializing score
let score = 0;

//Initializing time
let time = 10;
let timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function addWord() {
    randomWord = getRandomWord();
    words.innerHTML = randomWord; 
}

function updateScore() {
    score ++;
    scoreEl.innerText = score;
}

text.addEventListener("input", (e) => {
    const newText = e.target.value.trim();
    if (newText === randomWord) {
        updateScore();
        getRandomWord();
        
        time += 5;
        timeEl.innerHTML = time;
        e.target.value = "";
    }
});


//Time

let timer;

function updateTime() {
        timer = setInterval(() => {
        time --;

        timeEl.innerHTML = time;
        if (time === 0) {
            clearInterval(timeInterval);
            gameOver();
        }
    }, 1000);
}

function gameOver() {
    const endgameEl = document.getElementById("end-game-container");
    endgameEl.style.display = "block";
}

getRandomWord();

updateTime();
