import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Empresa } from '../../components/empresa/empresa'
import { Linha } from '../../components/linha/linha'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  tiquin: Empresa;
  /*li = new Linha('H. Regional', 10);*/

  constructor(public navCtrl: NavController) {
    this.tiquin = new Empresa('Tiquin');
  }

}
