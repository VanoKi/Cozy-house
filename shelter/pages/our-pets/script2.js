let container = document.querySelector('.pets_cards')
let cards = Array.from(container.querySelectorAll('.card'))
// console.log(cards);
cards.sort(() => Math.random() - 0.5)
// cards.forEach((i) => container.appendChild(i))


let allCards = []
for (let i = 0; i < 6; i++) {
  for (let card of cards.slice(i,).concat(cards.slice(0, i))){
    allCards.push(card);
  }
}

container.innerHTML = '';

let mySlice = 8

allCards.slice(0, mySlice).forEach((card) => container.appendChild(card))

//popup

const popup = document.querySelector('.popup_container')
const popupCard = document.querySelector('.popup_card');

const closePopUp = document.querySelector('.close')

closePopUp.addEventListener('click', () => {
  popup.style.display ='none';
})

popup.addEventListener('click', (event) => {
  if (event.target === popup && !popupCard.contains(event.target)) {
    popup.style.display = 'none';
  }
});

const cards2 = document.querySelectorAll('.card')
cards2.forEach(card => {
  card.addEventListener('click', () => {
    const cardId = card.classList[1];
    const popId = document.getElementById(cardId)
    popId.style.display = 'flex';
  })
})