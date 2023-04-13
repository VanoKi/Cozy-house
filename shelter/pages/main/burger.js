const burgerIco = document.querySelector('.burger_ico')
const burgerWrap = document.querySelector('.burger_wrap')
const body2 = document.querySelector('body')


burgerIco.addEventListener('click', () => {
  burgerIco.classList.toggle('rotate');
  burgerWrap.classList.toggle('hide');
  body2.classList.toggle('no-scroll');
})

const link = document.querySelectorAll('a')

link.forEach(a => {
  a.addEventListener('click', () => {
    burgerIco.classList.toggle('rotate');
    burgerWrap.classList.toggle('hide');
    body2.classList.toggle('no-scroll');
  })
})

  burgerWrap.addEventListener('click', (event) =>{
    if (!event.target.closest('.main_burger')){
      burgerIco.classList.toggle('rotate');
      burgerWrap.classList.toggle('hide');
      body2.classList.toggle('no-scroll');
    }
  })
