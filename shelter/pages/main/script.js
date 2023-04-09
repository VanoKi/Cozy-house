// const slider = document.querySelector('.cards')
// const sliderItems = Array.from(slider.children)
// const btnNext = document.querySelector('.right_arrow')
// const btnPrev = document.querySelector('.left_arrow')

// sliderItems.forEach(function (slide, index) {
//   // console.log(slide)
//   // slide.classList.add('hidden')
//   if(index > 2) slide.classList.add('hidden')
  
//   slide.dataset.index = index

//   //add data atribut active 
//   sliderItems[0].setAttribute('data-active', '');


//   //slide click
//   slide.addEventListener('click', function(){
//     // console.log("Next")
//     // hide current slide
//     slide.classList.add('hidden');
//     slide.removeAttribute('data-active');
//     // console.log(+slide.dataset.index + 3)
    
//     // index of slide
//     let nextSlideIndex = index + 3 === sliderItems.length ? nextSlideIndex = 0 : nextSlideIndex = index + 3
//     // if (index + 3 === sliderItems.length) {
//     //   nextSlideIndex = 0
//     // } else {
//     //   nextSlideIndex = index + 3
//     // }
//     // console.log(nextSlideIndex);
//     // const nextSlideIndex= +slide.dataset.index + 3
//     //find next slide
//     const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
//     // show nex slide
//     nextSlide.classList.remove('hidden')
//     nextSlide.setAttribute('data-active', '')

//   }
//   )
// });

// btnNext.onclick = function() {
//   console.log('next slide');

//   const currentSlide = slider.querySelector('[data-active]')
//   const currentSlideIndex = +currentSlide.dataset.index;
//   // console.log(currentSlideIndex);
//   currentSlide.classList.add('hidden');
//   currentSlide.removeAttribute('data-active');
//   //show next
//   let nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? nextSlideIndex = 0 : nextSlideIndex = currentSlideIndex + 1
//   const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
//   nextSlide.classList.remove('hidden')
//   nextSlide.setAttribute('data-active', '');
// }

// btnPrev.onclick = function() {
//   console.log('prev slide');

//   const currentSlide = slider.querySelector('[data-active]')
//   const currentSlideIndex = +currentSlide.dataset.index;
//   // console.log(currentSlideIndex);
//   currentSlide.classList.add('hidden');
//   currentSlide.removeAttribute('data-active');
//   //show next
//   let nextSlideIndex =  currentSlideIndex === 0 ?  sliderItems.length - 1 : currentSlideIndex - 1
//   const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
//   nextSlide.classList.remove('hidden')
//   nextSlide.setAttribute('data-active', '');
// }


//card mix
const container = document.getElementById('container')
const cards = Array.from(container.querySelectorAll('.card'))

// console.log(cards);

cards.sort(() => Math.random() - 0.5)

cards.forEach((card) => container.appendChild(card))
//end card mix

// slider
const prevBtn = document.querySelector(".left_arrow");
const nextBtn = document.querySelector(".right_arrow");

const cardsToShow = 3;
let currentIndex = 0;

function showCards() {
  const start = currentIndex
  const end = start + cardsToShow;
  cards.forEach((card, index) => {
    if (index >= start && index < end){
      card.classList.remove('hidden')
    } else{
      card.classList.add('hidden')
    }
  }) 
}

function slideNext() {
  currentIndex += cardsToShow
  if (currentIndex + cardsToShow >= cards.length) {
    currentIndex = 0
  }
  showCards()
}

function slidePrev () {
  currentIndex -= cardsToShow
  if (currentIndex < 0) {
    currentIndex = cards.length - cardsToShow
  }
  showCards()
}

prevBtn.addEventListener("click", slidePrev);
nextBtn.addEventListener("click", slideNext);

showCards()