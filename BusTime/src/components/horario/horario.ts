import { Component } from '@angular/core';

/**
 * Generated class for the HorarioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'horario',
  templateUrl: 'horario.html'
})
export class HorarioComponent {

  private horarios: number;
  private caminho: string;

  constructor() {
    this.caminho = "Lot. Aline";
  }
}


