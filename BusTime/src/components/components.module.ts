import { NgModule } from '@angular/core';
import { EmpresaComponent } from './empresa/empresa';
import { LinhaComponent } from './linha/linha';
@NgModule({
	declarations: [EmpresaComponent,
    LinhaComponent],
	imports: [],
	exports: [EmpresaComponent,
    LinhaComponent]
})
export class ComponentsModule {}
