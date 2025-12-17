import { Drink } from "./Drink.js";

export class Cocktail extends Drink {
  constructor(name, size, price, temperature, iceCream, milk) {
    super(name, size, price, temperature)
    this.iceCream = iceCream;
    this.milk = milk;
  }

  #setTemperature(temperature) {
    return temperature
  }

  getInfo() {
    super.getInfo();
    console.log(`Мороженное: ${this.iceCream}, Молоко: ${this.milk}`);
  }

  #makeCocktail() {
    setTimeout(() => {
      console.log(`Заливаем ${this.milk} в блендер и закидываем ${this.iceCream}, включаем блендер`)
    }, 2000);

    setTimeout(() => {
      console.log(`Блендер пыхтит, пердит, старается`)
    }, 4000);

    setTimeout(() => {
      console.log(`Учитываем просьбу гостя и делаем температуру коктейля потеплее ${this.#setTemperature('+5')}°C`)
    }, 6000);

    setTimeout(() => {
      console.log(`Готовый ${this.name} вливаем в стакан`)
    }, 8000);
  }

    serveDrink() {
    super.serveDrink();
    this.#makeCocktail();
  }
}