livesBox.value = 7;
const words = ["code", "break", "mountain", "vacation", "toddler"]
const randomWord = words[Math.floor(Math.random() * words.length)];
let lines = ""; 
newGame();


function newGame() {  
    for (let i = 0; i < randomWord.length; ++i) {
        lines += "_" + " ";
    }
    document.getElementById("Searched word").innerHTML = lines;
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
};

function checkLetter() {   
    for (let i = 0; i < randomWord.length; ++i) {
        if (letterBox.value == randomWord[i]) {
            lines = lines.replaceAt(i * 2, randomWord[i]);
        }
    }
    document.getElementById("Searched word").innerHTML = lines;
    if (!randomWord.includes(letterBox.value)) {
        --livesBox.value;
    }
    displayMessage(livesBox.value, lines);
}

function displayMessage(currentLives, currentLines) {
    if (currentLives == 0) {
        document.getElementById("Initial-text").innerText = "Game over! You lose!";
    } else if (!currentLines.includes('_')) {
        document.getElementById("Initial-text").innerText ="You win!";
    }
}
