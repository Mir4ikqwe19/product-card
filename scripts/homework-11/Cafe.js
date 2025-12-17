import { Drink } from "./Drink.js";
import { Coffee } from "./Coffee.js";
import { Tea } from "./Tea.js";
import { Cocktail } from "./Cocktail.js";

export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return console.log(`Добро пожаловать в кафе ${this.name}, мы находимся по адресу ${this.location}, ждём вас <3`);
  }

  orderDrink(drink) {
    return drink
  }

  getDrinkInfo(drink) {
    return drink.getInfo();
  }
}

const cranberryTea = new Tea('Чай Клюква-Апельсин', '850мл', '400 руб.', '+105°C', 'Гренадин', 'Клюква и Апельсин');
const cappuccino = new Coffee('Капучино', '350мл', '250 руб.', '+65°C', 'Бразилия Фэнси', 'Кокосовое молоко');
const milkShake = new Cocktail('Молочный коктейль', '375мл', '200 руб.', '+5°C', 'Сливочное мороженное', 'Пастеризованное молоко');
const sanremo = new Cafe('Sanremo', 'г.Каспийск ул.Ленина 35а');

sanremo.getInfo();
sanremo.getDrinkInfo(cappuccino);
sanremo.orderDrink(milkShake.serveDrink());