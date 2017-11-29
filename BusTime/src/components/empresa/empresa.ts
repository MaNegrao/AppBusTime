import { Component } from '@angular/core';

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
  let linhas: Array<linha>;
  let text: string;

  constructor() {
    console.log('Hello EmpresaComponent Component');
    this.text = 'Hello World';
  }

}
