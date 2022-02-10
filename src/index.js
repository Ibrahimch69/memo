//la j'ai cree un class et je les mis dans fiche tout seul js 
import Ph from './Ph' 


//j'ai cree mes class on les metant dans un tableau 
let card1 = [new Ph(1, './image/chat.png', 'chat'), new Ph(2, './image/fille2.png', 'fille2'), new Ph(3, './image/homme.png', 'homme'), new Ph(4, './image/zombie.png', 'zombie'),new Ph(5, './image/robot.png', 'robot'),new Ph(5, './image/homme2.png', 'homme2')]

let memoryGame = document.querySelector('.memory-game')

for(let i = 0; i < card1.length; i++){
  let creatediv = document.createElement('div');
  creatediv.setAttribute('class', 'memory-card');
  creatediv.setAttribute('data-framework', card1[i].name);

  let createimg = document.createElement('img');
  createimg.setAttribute('class', 'front-face')
  createimg.src = card1[i].image;

  let createbutton = document.createElement('button')
  createbutton.setAttribute('class','back-face');
  createbutton.textContent = 'Affiche';

  creatediv.appendChild(createimg);
  creatediv.appendChild(createbutton)
  memoryGame.appendChild(creatediv)

  let creatediv2 = document.createElement('div');
  creatediv2.setAttribute('class', 'memory-card');
  creatediv2.setAttribute('data-framework', card1[i].name);

  let createimg2 = document.createElement('img');
  createimg2.setAttribute('class', 'front-face')
  createimg2.src = card1[i].image;

  let createbutton2 = document.createElement('button')
  createbutton2.setAttribute('class','back-face');
  createbutton2.textContent = 'Affiche';

  creatediv2.appendChild(createimg2);
  creatediv2.appendChild(createbutton2)
  memoryGame.appendChild(creatediv2)
}


let cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
// c'est pour que les catre retourne si ses pas les memes
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard)); // 