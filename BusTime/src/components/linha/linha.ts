import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello LinhaComponent Component');
    this.text = 'Hello World';
  }

}
