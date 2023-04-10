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