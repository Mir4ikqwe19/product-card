import { productList } from "./product-list.js"

// Задание №1 - По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек
/* Задание №6 - Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом, мол "Сколько карточек отобразить? От 1 до 5"
 и в зависимости от результата - будет выводить это количество. Должна быть защита от введенных других значений (имеется ввиду проверка if). */

const productCardTemplate = document.getElementById('product-card-template');
const cardsContainer = document.querySelector('.cards-container');
const cardCount = +prompt('Укажите нужное кол-во карточек для вывода')

function drawProductCards(card) {
  if (isNaN(card)) {
    alert('Ошибка! Укажите кол-во числом!')
} else if (card > 5) {
    alert('Ошибка! Укажите число от 1 до 5!')
} else if (card < 5 || card > 1) {
    return productList.slice(0, card).forEach(product => {
    const productClone = productCardTemplate.content.cloneNode(true);
    productClone.querySelector('.product-image').src = `assets/${product.image}.svg`;
    productClone.querySelector('.skin-type').textContent = product.skinType;
    productClone.querySelector('.product-name').textContent = product.productName;
    productClone.querySelector('#product-description').textContent = product.description;
    productClone.querySelector('#composition').innerHTML = product.composition.map(item => `<li>${item}</li>`).join('')
    productClone.querySelector('.product-card-price-value').textContent = product.value + " \u20BD";
    cardsContainer.appendChild(productClone);
    }
  )}
}

drawProductCards(cardCount)

// Задание №2 - Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой

const getProductCardsName = productList.reduce((acc, item) => {
  return acc + ` ${item.productName};`
}, '');

// Задание №3 - Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const getProductKeys = productList.reduce((acc, item) => {
  acc.push({[item.productName]: item.description})
  return acc
}, []);