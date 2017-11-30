import { Component } from '@angular/core';
import { LinhaComponent } from '../linha/linha';

/**
 * Generated class for the EmpresaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'empresa',
  templateUrl: 'empresa.html'
})
export class EmpresaComponent {

  name: string;
  linhas = new Array<LinhaComponent>();
  
  constructor(name: string, linha: LinhaComponent) {
    length = this.linhas.push(linha)
    this.name = name;
  }

}
