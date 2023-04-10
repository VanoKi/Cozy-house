const container = document.querySelector('.pets_cards')
let cards = Array.from(container.querySelectorAll('.card'))
// console.log(cards);
cards.sort(() => Math.random() - 0.5)

cards.forEach((card) => container.appendChild(card))