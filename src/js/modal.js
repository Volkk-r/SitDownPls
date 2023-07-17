const modalForm = document.querySelector('.modal-form')
const modalThanks = document.querySelector('.modal-thanks')
const modalProduct = document.querySelector('.modal-product')

if (document.querySelector('#product')) {
  const productImgBig = document.querySelector('.product__img-big')
  const buttonBuy = document.querySelector('.btn-modal')
  const buttonClose = document.querySelectorAll('.modal-close')
  const btnForm = document.querySelector('.modal-submit')
  productImgBig.addEventListener('click', () => {
    modalProduct.classList.add('open')
  })

  buttonBuy.addEventListener('click', () => {
    modalForm.classList.add('open')
  })

  buttonClose.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalForm.classList.remove('open')
      modalThanks.classList.remove('open')
      modalProduct.classList.remove('open')
    })
  })


  var selector = document.getElementById("modalPhone");
  var im = new Inputmask("+7(999) 999-99-99");
  im.mask(selector);

  const validation = new JustValidate('#modalForm');

  validation
    .addField('#modalName', [
      {
        rule: 'required',
        errorMessage: 'Недопустимый формат',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Имя должно содержать минимум 2 символа',
      },
      {
        rule: 'maxLength',
        value: 15,
        errorMessage: 'Имя не может быть больше 15 символов',
      },
    ])
    .addField('#modalPhone', [
      {
        rule: 'required',
        errorMessage: 'Недопустимый формат'
      },
      {
        validator: (value) => {
          const tel = selector.inputmask.unmaskedvalue()
          return Boolean(Number(tel) && tel.length === 10)
        },
        errorMessage: "Введите номер полностью"
      },
    ])
    .onSuccess(() => {
      btnForm.addEventListener('click', () => {
        modalForm.classList.remove('open')
        modalThanks.classList.add('open')
      })
    })

  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      modalForm.classList.remove('open')
      modalThanks.classList.remove('open')
      modalProduct.classList.remove('open')
    }
  });
  modalForm.addEventListener('click', function (event) {
    if (!event.target.classList.contains('modal')) {
      return;
    }
    modalForm.classList.remove('open')
  });
  modalProduct.addEventListener('click', function (event) {
    if (!event.target.classList.contains('modal')) {
      return;
    }
    modalProduct.classList.remove('open')
  });
  modalThanks.addEventListener('click', function (event) {
    if (!event.target.classList.contains('modal')) {
      return;
    }
    modalThanks.classList.remove('open')
  });
}
