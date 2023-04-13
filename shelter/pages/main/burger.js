const burgerIco = document.querySelector('.burger_ico')
const burgerWrap = document.querySelector('.burger_wrap')

burgerIco.addEventListener('click', () => {
  burgerIco.classList.toggle('.rotate');
  if (burgerWrap.style.display === 'none') {
    burgerWrap.style.display = 'block';
  } else {
    burgerWrap.style.display = 'none'
  }
})