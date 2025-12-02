/* Задани №1 - добавить логику:
email должен соответствовать стандартам (добавить валидацию), если он не заполнен - форма не отправляется.
Кнопка "Подписаться" и есть "отправкой формы", 
при нажатии на которую мы будем выводить консоль лог в виде объекта: { email: 'введенная почта' } */

const emailForm = document.querySelector('#email-form');
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = Object.fromEntries(new FormData(form));

  console.log(formData);
  form.reset();
})

//Задание №2 - написать форму для регистрации, сделать проверку паролей, дополнительно добавить свойство createdOn и время создания.

const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const userName = document.querySelector('#name')
const lastName = document.querySelector('#lastName')
const message = document.querySelector('#message');
const login = document.querySelector('#login')

let resultRegistrationForm = undefined;
const registrationForm = document.querySelector('#registration-form');
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (password.value === confirmPassword.value) {
    const regForm = event.target;
    const regFormData = Object.fromEntries(new FormData(regForm));
    regFormData.createdOn = new Date();
    resultRegistrationForm = regFormData;
    message.textContent = 'Успешно!';
    message.style.color = 'white';

    console.log(resultRegistrationForm);
    regForm.reset();
  } else {
      message.textContent = 'Пароли не совпадают!';
      message.style.color = 'red';
  };
});

/* Задание №3 - создать модалку с авторизацией, сделать проверку: проверяем логин и пароль с объектом из формы регистрации,
если да - то закрыть модалку и вывести сообщение, что успешно, если нет - то вывести сообщение об ошибке, так же создать глобальную
переменную */

const modalBackground = document.querySelector('#modal-background')
const modalDialog = document.querySelector('#modal-dialog');
const authButton = document.querySelector('#auth-button');
const closeModalWindow = document.querySelector('#close-modal-window');
const authForm = document.querySelector('#modal-sign-form')
const modalLogin = document.querySelector('#modal-login')
const modalPassword = document.querySelector('#modal-password')

authButton.addEventListener('click', () => {
  modalDialog.classList.add('modal-showed')
  modalBackground.classList.add('active')
});

closeModalWindow.addEventListener('click', () => {
  modalDialog.classList.remove('modal-showed')
  modalBackground.classList.remove('active')
});


modalBackground.addEventListener('click', event => {
  if (event.target === modalBackground) {
    modalDialog.classList.remove('modal-showed')
    modalBackground.classList.remove('active')
  }
})

let currentUser = undefined

authForm.addEventListener('submit', event => {
  event.preventDefault()

  if (modalLogin.value === resultRegistrationForm.login && modalPassword.value === resultRegistrationForm.password) {
    const form = event.target;
    const formData = Object.fromEntries(new FormData(form));
    currentUser = resultRegistrationForm;
    currentUser.lastLogin = new Date();
    modalDialog.classList.remove('modal-showed');
    modalBackground.classList.remove('active');
    alert('Данные введены правильно, вы авторизовались!');
    
    console.log({...formData, lastLogin: currentUser.lastLogin});
    form.reset()
  } else {
    alert('Логин или Пароль введены не верно!');
  }
});