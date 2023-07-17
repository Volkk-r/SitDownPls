if (document.querySelector('#product')) {
  //  главная страница
  let tabSmall = document.querySelectorAll('.product__img-small-wrap');
  let tabBig = document.querySelectorAll('.product__img-big-view');

  tabSmall.forEach(function (element) {
    element.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;

      tabBig.forEach(function (btn) { btn.classList.remove('active') });
      e.currentTarget.classList.add('active');

      tabBig.forEach(function (element) { element.classList.remove('active') });
      document.querySelector(`[data-target="${path}"]`).classList.add('active');
    });
  });

  // модальное окно

  let tabSmallModal = document.querySelectorAll('.modal-product__img-small-wrap');
  let tabBigModal = document.querySelectorAll('.modal-product__img-big-view');

  tabSmallModal.forEach(function (element) {
    element.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.img;

      tabBigModal.forEach(function (btn) { btn.classList.remove('active') });
      e.currentTarget.classList.add('active');

      tabBigModal.forEach(function (element) { element.classList.remove('active') });
      document.querySelector(`[data-modal="${path}"]`).classList.add('active');
    });
  });
}
