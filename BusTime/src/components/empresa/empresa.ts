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
  
  l = new LinhaComponent();

  private name: string;
  private linhas: Array<LinhaComponent>;

  constructor() {
    this.name = "Tiquin";
  }

}
