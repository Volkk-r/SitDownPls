const btnBuy = document.querySelectorAll('.btn-buy');
btnBuy.forEach((el) => {
  el.addEventListener('click', () => {
    document.location = 'product.html';
  });
});
