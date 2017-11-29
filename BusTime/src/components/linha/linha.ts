import { Component } from '@angular/core';
import { HorarioComponent } from '../horario/horario';

/**
 * Generated class for the LinhaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'linha',
  templateUrl: 'linha.html'
})
export class LinhaComponent {

  private name: string;
  private pref: number;
  private horarios: Array<HorarioComponent>;

  constructor() {
    
    this.name = name;
  }

}
