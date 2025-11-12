// Домашнее задание №6:

/* 1. Создать объект на основе моих данных: Имя, Фамилия, возраст и тд, до 10. 
Подобрать правильное навазние для переменной. */

const userInfo = {
  name: 'Amir',
  surname: 'Adilov',
  age: 23,
  country: 'Russia',
  city: 'Kaspiysk',
  maritalStatus: 'single'
};

/* 2. Создать объект с данными об авто: Марка, модель, год выпуска, цвет, вид коробки.
Добавить доп. свойство - владелец авто, значением которого будет объект описанный выше. */

const carInfo = {
  carBrand: 'Toyota',
  carModel: 'Mark 2 jzx100',
  yearOfIssue: 1996,
  color: 'Black',
  gearShift: 'Manual',
  carOwner: ''
};

carInfo.carOwner = carInfo;

/* 3. Написать функцию принимающую объект из пункта №2, которая будет проверять есть ли
свойство макс. скорость, если нет - добавляет его, если есть - ничего не делает*/

const compareMaxSpeed = car => {
  if (car !== carInfo.maxSpeed) {
    carInfo.maxSpeed = '240 km/h';
  } else {
    return
  }
};

compareMaxSpeed(carInfo);

/* 4. Написать функцию, которая получает первым аргументом - объект,
а вторым аргументом - свойство объекта, которое надо вывести и выводит его значение. */

function getObjectArguments (object, property) {
  console.log(object[property])
};

getObjectArguments(carInfo,"carModel");

/* 5. Создать массив который содержит названия продуктов(просто строки) */

const productList = ['Cucumber', 'Potato', 'Tomato', 'Cheese', 'Carrot'];

/* 6. Создать массив состоящий из объектов, где объект представляет из себя книгу(название, автор, год выпуска, цвет обложки, жанр)
После, добавить ещё одну книгу в конец списка, книг должно быть 3-5 */

const classicBookList = [
  {
    bookTitle: 'Триумфальная арка',
    author: 'Эрих Мария Ремарк',
    yearOfIssue: 1945,
    coverColor: 'Бежевый',
    genre: 'Роман'
  },
  {
    bookTitle: 'Пациент особой клиники',
    author: 'Себстьян Фитцек',
    yearOfIssue: 2018,
    coverColor: 'Серый',
    genre: 'Триллер'
  },
  {
    bookTitle: 'Ночь в Лиссабоне',
    author: 'Эрих Мария Ремарк',
    yearOfIssue: 1962,
    coverColor: 'Бордовый',
    genre: 'Роман'
  },
  {
    bookTitle: 'Острие бритвы',
    author: 'Сомерсет Моэм',
    yearOfIssue: 1944,
    coverColor: 'Синий',
    genre: 'Роман'
  },
];

classicBookList.push(
  {
    bookTitle:'Идиот', 
    author: 'Фёдор Михайлович Достоевский', 
    yearOfIssue: 1869, 
    coverColor: 'Бежевый', 
    genre: 'Роман'
  });

/* 7. Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной,
С помощью известного нам метода массива или оператора (рекомендую использовать оператор), объединить эти два массива в один */

const fantasyBookList = [
  {
    bookTitle:'Нечто из Рютте', 
    author: 'Борис Конофальский', 
    yearOfIssue: 2021, 
    coverColor: 'Чёрный', 
    genre: 'Фэнтези'
  },
  {
    bookTitle:'Рыцарь-разбойник', 
    author: 'Борис Конофальский', 
    yearOfIssue: 2022, 
    coverColor: 'Чёрный', 
    genre: 'Фэнтези'
  },
  {
    bookTitle:'Плохая война', 
    author: 'Борис Конофальский', 
    yearOfIssue: 2023, 
    coverColor: 'Чёрный', 
    genre: 'Фэнтези'
  }];

const allBookList = [...classicBookList, ...fantasyBookList]

/* 8. Написать функцию, которая принимает массив сущностей с задания №9. Добавляем новое свойство для объекта "isRare (это редкий)" 
и в зависимости от года выпуска книги (или какой-то логики, связанной с вашей сущностью), устанавливаем true или false.
если книга выпущена позже 2000 года, устанавливаем true (да, это редкий), нет - false (значит это не редкий). */

const isRareBook = allBookList.map(object => {
  if (object.yearOfIssue >= 2000) {
    return object.isRare = 'да это редкий'
  }else {
    return object.isRare = 'нет это не редкий'
  }
});