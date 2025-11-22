import { comments } from "./comments.js";

/* Задание №1 - Создать массив чисел от 1 до 1. Отфлитровать таким образом, чтобы 
мы получили массив чисел начиная с 5 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterNumbers = numbers.filter(number => number >= 5);

/* Задание №2 - Создать массив строк, относящихся к любой сущности(название фильмов/книг, кух приборы, мебель и тд),
проверить, есть ли в массиве какая-то определенная сущность.*/

const bookList = ['Гэм', 'Посылка', 'Ночь в Лиссабоне', 'Мартин Иден', 'Великий Гэтсби', 'Острие бритвы', 'По ком звонит колокол'];

console.log(bookList.includes('Великий Гэтсби'));

/* Задание №3 - Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный.
Два вышеуказанных массива с помощью этой функции перевернуть.*/

const getReverseArray = (arr) => {
  return arr.reverse();
};

getReverseArray(bookList);
getReverseArray(filterNumbers);

/* Задание №4 - Вынести в консоль массив тех комментов, почта которых содержит в себе .com */

const checkEmail = comments.filter(email => email.email.endsWith('.com'));

/* Задание №5 - Перебрать массив таким образом, чтобы пользователи с id меньше или равно 5 имели postId: 2,
а те, у кого id больше 5, имели postId: 1*/

const checkUserId = comments.map(user => ({...user, postId: user.id <= 5 ? 2 : 1 }));

/* Задание №6 - Перебрать массив, что бы объекты состояли только из айди и имени */

const updateArray = comments.map(arr => ({id: arr.id, name: arr.name}));

/* Задание №7 - Перебираем массив, добавляем объектам свойство isInvalid 
и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false. */

const validatedComments = comments.map(user => ({...user, isInvalid: user.body.length > 180}));

/* Задание №8 - Почитать про метод массива reduce. 
Используя его, вывести массив почт и провернуть тоже самое с помощью метода map */

const mappedEmails = comments.map(user => ({email: user.email}));

const showUserEmails = comments.reduce((acc, user) => {
  acc.push(user.email);
  return acc;
}, []);

/* Задание №9 - Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке. */

const mapToString = showUserEmails.toString();
const convertArrayToString = showUserEmails.join(' ');