import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Empresa } from '../../components/empresa/empresa'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  tiquin: Empresa;
  constructor(public navCtrl: NavController) {
    this.tiquin = new Empresa('Tiquin');
    console.log("tiquin criada" + this.tiquin.name);
  }

}
