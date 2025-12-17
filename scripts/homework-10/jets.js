class Jet {
  constructor(company, model, engine, length, height) {
    this.company = company;
    this.model = model;
    this.engine = engine;
    this.length = length;
    this.height = height;
  };

  getSizeInfo() {
    return console.log(`Высота самолёта ${this.model}: ${this.height}, Длина самолёта ${this.model}:  ${this.length}`);
  };
};

class FighterJet extends Jet {
  constructor(company, model, engine, length, height, maxSpeed) {
    super(company, model, engine, length, height);
    this.maxSpeed = maxSpeed;
  };

  getEngineInfo() {
    return console.log(`Двигатель истребителя ${this.model}: ${this.engine}, Максимальная скорость истребителя ${this.model}: ${this.maxSpeed}`);
  };
};

const transportPlane = new Jet('ОКБ ИЛЬЮШИНА', 'ИЛ-76', '4 х Д-30КП', '46,6 м', '14,76 м');
const fighterPlane = new FighterJet('ОКБ СУХОЙ', 'СУ-30', '2 х Сатурн АЛ-31', '21,9 м', '6,36 м', '2,120 км/ч');

transportPlane.getSizeInfo();
fighterPlane.getEngineInfo();
fighterPlane.getSizeInfo();