import { NgModule } from '@angular/core';
import { EmpresaComponent } from './empresa/empresa';
import { LinhaComponent } from './linha/linha';
import { HorarioComponent } from './horario/horario';
@NgModule({
	declarations: [EmpresaComponent,
    LinhaComponent,
    HorarioComponent],
	imports: [],
	exports: [EmpresaComponent,
    LinhaComponent,
    HorarioComponent]
})
export class ComponentsModule {}
