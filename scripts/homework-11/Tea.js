import { Drink } from "./Drink.js";

export class Tea extends Drink {
  constructor(name, size, price, temperature, syrup, berry) {
    super(name, size, price, temperature)
    this.syrup = syrup;
    this.berry = berry;
  }

  getInfo() {
    super.getInfo();
    console.log(`Сироп: ${this.syrup}, Ягоды: ${this.berry}`);
  }


  #makeTea() {
    setTimeout(() => {
      console.log(`Нарезаем апельсин`)
    }, 2000);

    setTimeout(() => {
      console.log(`Достаём из холодильника замороженную клюкву`)
    }, 3000);

    setTimeout(() => {
      console.log(`Устанавливаем температуру бойлера ${this.setTemperature('+100')}°C`)
    }, 4000);

    setTimeout(() => {
      console.log(`Закидываем ${this.berry} в питчер и ручками перемалываем, заливая туда ${this.syrup}`)
    }, 5000);

    setTimeout(() => {
      console.log(`Заливаем кипяток из бойлера в питчер и идём взбивать всё это дело`)
    }, 7000);

    setTimeout(() => {
      console.log(`Всю эту массу заливаем в чайник пропуская через сито`)
    }, 9000);
  }

  serveDrink() {
    super.serveDrink();
    this.#makeTea();
  }
}