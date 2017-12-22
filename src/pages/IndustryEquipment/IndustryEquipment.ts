import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ServiceSingletonProvider } from '../../providers/service-singleton/service-singleton';

@Component({
  selector: 'page-IndustryEquipment',
  templateUrl: 'IndustryEquipment.html'
})
export class IndustryEquipmentPage {
  public title:any="Industry Equipment";
  constructor(public navCtrl: NavController,
              public navParms: NavParams,
              public webService: ServiceSingletonProvider) {
                  

  }

}
