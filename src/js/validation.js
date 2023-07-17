if (document.querySelector('#mainPage')) {
  var selector = document.getElementById("phone");
  var im = new Inputmask("+7(999) 999-99-99");
  im.mask(selector);

  const validation = new JustValidate('#feedback-form');

  validation
    .addField('.feedback__name', [
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
    .addField('.feedback__email', [
      {
        rule: 'required',
        errorMessage: 'Недопустимый формат',
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат',
      },
    ])
    .addField('.feedback__phone', [
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
}
