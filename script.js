livesBox.value = 7;
const words = ["code", "break", "mountain", "vacation", "toddler"]
const randomWord = words[Math.floor(Math.random() * words.length)];
let lines = "";
for (let i = 0; i < randomWord.length; ++i) {
    lines += "_" + " ";
}
document.getElementById("Searched word").innerHTML = lines;
var modifiedLines = lines;

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
};

function letsPlay() {
    for (let i = 0; i < randomWord.length; ++i) {
        if (letterBox.value == randomWord[i]) {
            modifiedLines = modifiedLines.replaceAt(i * 2, randomWord[i]);
        }
    }
    document.getElementById("Searched word").innerHTML = modifiedLines;
    if (!randomWord.includes(letterBox.value)) {
        --livesBox.value;
    }
    if (livesBox.value == 0) {
        document.getElementById("Initial-text").innerText = "Game over! You lose!";
    } else if (!modifiedLines.includes('_')) {
        document.getElementById("Initial-text").innerText ="You win!";
    }
}
