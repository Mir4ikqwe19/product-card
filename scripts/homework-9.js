import { Modal } from "./homework-10/Modal.js"
import { Form } from "./homework-10/Form.js";

/* Задание №1 - добавить логику:
email должен соответствовать стандартам (добавить валидацию), если он не заполнен - форма не отправляется.
Кнопка "Подписаться" и есть "отправкой формы", 
при нажатии на которую мы будем выводить консоль лог в виде объекта: { email: 'введенная почта' } */

const modalBackground = document.querySelector('#modal-background');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const userName = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const message = document.querySelector('#message');
const login = document.querySelector('#login');
const closeModalButton = document.getElementById('close-modal-window');
const authButton = document.getElementById('auth-button');
const modalClass = new Modal('modal-dialog');
const emailFormInstance = new Form('email-form');
const registrationFormInstance = new Form('registration-form');

const emailForm = document.querySelector('#email-form');
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  emailFormInstance.isValid();
  emailFormInstance.getFormValue();
  emailFormInstance.resetFormValue();
});

//Задание №2 - написать форму для регистрации, сделать проверку паролей, дополнительно добавить свойство createdOn и время создания.

authButton.addEventListener('click', () => {
  modalClass.openModal();
  modalClass.isOpen();
})

closeModalButton.addEventListener('click', () => {
  modalClass.closeModal();
  modalClass.isOpen();
})

modalBackground.addEventListener('click', (event) => {
  if (event.target === modalBackground) {
    modalClass.closeModal();
    modalClass.isOpen();
  }
})

let resultRegistrationForm = undefined;

const registrationForm = document.querySelector('#registration-form');
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (password.value === confirmPassword.value) {
    const regFormData = registrationFormInstance.getFormValue();
    registrationFormInstance.isValid();
    registrationFormInstance.resetFormValue();
    regFormData.createdOn = new Date();
    resultRegistrationForm = regFormData;
    message.textContent = 'Успешно!';
    message.style.color = 'white';
  } else {
      message.textContent = 'Пароли не совпадают!';
      message.style.color = 'red';
  };
});

/* Задание №3 - создать модалку с авторизацией, сделать проверку: проверяем логин и пароль с объектом из формы регистрации,
если да - то закрыть модалку и вывести сообщение, что успешно, если нет - то вывести сообщение об ошибке, так же создать глобальную
переменную */

const authForm = document.querySelector('#modal-login-form');
const modalLogin = document.querySelector('#modal-login');
const modalLoginInstance = new Form('modal-login-form');
const modalPassword = document.querySelector('#modal-password');

let currentUser = undefined;

authForm.addEventListener('submit', event => {
  event.preventDefault();

  if (modalLogin.value === resultRegistrationForm.login && modalPassword.value === resultRegistrationForm.password) {
    const formData = modalLoginInstance.getFormValue();
    modalLoginInstance.isValid();
    modalLoginInstance.resetFormValue();
    currentUser = resultRegistrationForm;
    currentUser.lastLogin = new Date();
    modalClass.closeModal();
    modalClass.isOpen();
    alert('Данные введены правильно, вы авторизовались!');
    console.log({...formData, lastLogin: currentUser.lastLogin});
  } else {
    alert('Логин или Пароль введены не верно!');
  }
});