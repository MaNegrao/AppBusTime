import { Component,Input } from '@angular/core';
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
  @Input() model: Empresa;
  
  constructor(){

  }
}

export class Empresa{
  name: string; 
  linhas: Array<string>;

  constructor(name: string){
    this.name = name;
    this.linhas = ["linha 1", "segunda linha"];
  }
}