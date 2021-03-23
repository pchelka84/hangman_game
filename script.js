const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figurePart = document.querySelectorAll('.figure-part');

const words = ['application', 'programming','interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = ['a', 'p', 'l', 'i', 'c', 'a', 't', 'o', 'n'];
const wrongLetters = [];

// Show hidden word
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split('')
      .map(
        letter => `
          <span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
          </span>
        `
      )
      .join('')}
  `; 
 const innerWord = wordEl.innerText.replace(/\n/g,'')

 if (innerWord === selectedWord) {
   finalMessage.innerText='Congratulations! You won!';
   popup.style.display = 'flex';
 }
}

displayWord();
