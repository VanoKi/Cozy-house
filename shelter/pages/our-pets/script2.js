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

let popId = ''
const cards2 = document.querySelectorAll('.card')
cards2.forEach(card => {
  card.addEventListener('click', () => {
    const cardId = card.classList[1];
           popId = document.getElementById(cardId)
    popId.style.display = 'flex';
    // console.log(body);
    body.classList.add('no-scroll')
  })
})

const popup = document.querySelector('.popup_container')
const popupCard = document.querySelector('.popup_card');
const body = document.querySelector('body')
const closePopUp = document.querySelector('.close')

const divEl = document.querySelectorAll('.popup_container');
divEl.forEach(el => {
  el.addEventListener('click', (event) =>{
    if (!event.target.closest('.popup_card')){
    el.style.display = 'none';
    // console.log(body);
    body.classList.remove('no-scroll')
    }
  })
})

const close = document.querySelectorAll('.close');
close.forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    const parentPopup = closeBtn.closest('.popup_container');
    parentPopup.style.display = 'none';
    // console.log(body);
    body.classList.remove('no-scroll')
  });
});
