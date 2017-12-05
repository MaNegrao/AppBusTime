import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Empresa } from '../../components/empresa/empresa';
import { Linha } from '../../components/linha/linha';
import { Seminario8Page } from '../s'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  but = Seminario8Page;

  tiquin: Empresa;
  li = new Linha('Seminario', '08');

  constructor(public navCtrl: NavController) {
    this.tiquin = new Empresa('Tiquin', this.li);
  }

}
