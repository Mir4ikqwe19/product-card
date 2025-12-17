export class Drink {
  #temperature
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return console.log(`Название напитка: ${this.name}, Размер напитка: ${this.size}, Стоимость напитка: ${this.price}`);
  }

  getTemperature() {
    return console.log(this.#temperature);
  }

  #setTemperature(temperature) {
    return temperature
  }

  #makeDrink() {
    console.log(`Готовим ваш ${this.name}`);
  }

  serveDrink() {
    this.#makeDrink();

    setTimeout(() => {
      console.log(`Температура готового напитка - ${this.name}, ${this.#temperature}`)
    }, 10000);

    setTimeout(() => {
      console.log(`Пожалуйста, ваш ${this.name}, объёмом в ${this.size} готов! С вас ${this.price} приятного <3`)
    }, 13000);
  }
}