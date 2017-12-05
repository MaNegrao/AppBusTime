import { Component, Input } from '@angular/core';
import { HorarioComponent } from '../horario/horario';
import { Empresa, EmpresaComponent } from '../empresa/empresa'


@Component({
  selector: 'linha',
  templateUrl: 'linha.html'
})
export class LinhaComponent {
  @Input() model: Linha;
  constructor(){
    
  }
}

export class Linha{
  name: string;
  prefixo: string;
  horarios: Array<string>;
  
  constructor(name: string, prefixo: string){
    this.name = name;
    this.prefixo = prefixo;
  }
}
