const dropdownHeader1 = document.querySelector('.region__dropdown');
const dropdownHeader2 = document.querySelector('.form__dropdown');
const dropdownCategory = document.querySelector('.filter__category');
const dropdownPrice = document.querySelector('.filter__price');
const dropdownColor = document.querySelector('.filter__color');
const dropdownSale = document.querySelector('.filter__sale');


function dropdown(dropdown) {
  const buttonDropdown = dropdown.querySelector('.dropdown-selected');
  const listDropdown = dropdown.querySelector('.dropdown-options');
  const itemsDropdown = listDropdown.querySelectorAll('.dropdown-option');

  buttonDropdown.addEventListener('click', function (event) {
    event.preventDefault();
    listDropdown.classList.toggle('menu-active');
    buttonDropdown.classList.toggle('active');
  })

  itemsDropdown.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.stopPropagation();
      buttonDropdown.textContent = this.innerText;
      buttonDropdown.focus();
      listDropdown.classList.remove('menu-active');
      buttonDropdown.classList.remove('active');
    });
  });
  document.addEventListener('click', function (event) {
    if (event.target !== buttonDropdown) {
      listDropdown.classList.remove('menu-active');
      buttonDropdown.classList.remove('active');
    };
  });
}
let width = window.innerWidth;
if (document.querySelector('#catalog') && width <= 1350) {
  dropdown(dropdownCategory)
  dropdown(dropdownPrice)
  dropdown(dropdownColor)
  dropdown(dropdownSale)
}
dropdown(dropdownHeader1)
dropdown(dropdownHeader2)
