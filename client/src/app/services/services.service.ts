import { Injectable } from '@angular/core';

@Injectable()
export class ServicesService {

  public muck = [
    { id: 1, lugar: 'Roma', plan: 'pagado', description: 'hsahashhajshjashjsahjasddkjhshjsdhjdsh', distancia: '', cercania: '', },
    { id: 2, lugar: 'Madrid', plan: 'no pagado', description: 'hsahashhajshjashjsahjasddkjhssdhj', distancia: '', cercania: '', },
    { id: 3, lugar: 'Paris', plan: 'pagado', description: 'hsahashhajshjashjsahjasddkjhshjsdhdhj', distancia: '', cercania: '', },
    { id: 4, lugar: 'Irlanda', plan: 'no pagado', description: 'hsahashhajshjashjsahjasdhjsdsdhj', distancia: '', cercania: '', }
  ];

  constructor() { }

  getDb() {
    return this.muck;
  }

}
