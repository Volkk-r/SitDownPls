let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav-main');
let menuLink = menu.querySelectorAll('.nav-main__link');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active')
})

menuLink.forEach(function (e) {
  e.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
  })
})
