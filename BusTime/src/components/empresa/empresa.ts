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
  linhas: Linha;

  constructor(name: string, li: Linha){
    this.name = name;
    this.linhas = li;
  }
  
}