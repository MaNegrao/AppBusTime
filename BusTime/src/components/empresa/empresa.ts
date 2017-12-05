import { Component, Input} from '@angular/core';
import { Linha } from '../linha/linha'

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
  linhas: Array<Linha> = [];
  regional: Linha;

  constructor(name: string){
    this.name = name;
    this.regional = new Linha('H. Regional', 10);
    this.linhas.push(this.regional);
  }
  
}