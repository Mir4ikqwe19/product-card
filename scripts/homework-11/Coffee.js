import { Drink } from "./Drink.js";

export class Coffee extends Drink {
  constructor(name, size, price, temperature, grain, milk) {
    super(name, size, price, temperature);
    this.grain = grain;
    this.milk = milk;
  }

  getInfo() {
    super.getInfo();
    console.log(`Зёрна: ${this.grain}, Молоко: ${this.milk}`);
  }

  #makeCoffee() {
    setTimeout(() => {
      console.log(`Заливаем ${this.milk} в питчер, начинаем взбивать`)
    }, 2000);

    setTimeout(() => {
      console.log(`Перемолотые зёрна ${this.grain} темперуем и отправляем в кофемашинку`)
    }, 4000);

    setTimeout(() => {
      console.log(`Устанавливаем температуру кофемашинки +94°C и включаем её`)
    }, 6000);

    setTimeout(() => {
      console.log(`Заливаем готовый кофе в чашку и начинаем плавно вливать взбитое ${this.milk}`)
    }, 8000);
  }

  serveDrink() {
    super.serveDrink();
    this.#makeCoffee();
  }
}