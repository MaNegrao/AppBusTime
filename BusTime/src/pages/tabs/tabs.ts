import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { EmpresaComponent } from '../../components/empresa/empresa';
import { LinhaComponent} from '../../components/linha/linha'
import { FavPage } from '../fav/fav';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root = HomePage;
  tab2Root = ContactPage;
  tab3Root = FavPage;

  constructor(){

  }
}
