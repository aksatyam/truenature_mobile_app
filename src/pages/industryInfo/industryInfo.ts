import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ServiceSingletonProvider } from '../../providers/service-singleton/service-singleton';
import { IndustryDetailsPage } from '../IndustryDetails/IndustryDetails';
import { IndustryUserTypePage } from '../IndustryUserType/IndustryUserType';
import { IndustryUserPage } from '../IndustryUser/IndustryUser';
import { IndustryEquipmentPage } from '../IndustryEquipment/IndustryEquipment';
import { IndustryMaterialPage } from '../IndustryMaterial/IndustryMaterial';
import { IndustryStageEquipPage } from '../IndustryStageEquip/IndustryStageEquip';
import { IndustryShiftPage } from '../IndustryShift/IndustryShift';
import { IndustryLotsPage } from '../IndustryLots/IndustryLots';

@Component({
  selector: 'page-industryInfo',
  templateUrl: 'industryInfo.html'
})
export class IndustryInfoPage {
  public title="Industry Information";
  public IndustryInfo:any;
  constructor(public navCtrl: NavController, public webService:ServiceSingletonProvider, public navParms:NavParams) {
    if(this.navParms.get('IndustryInfo')){
        this.IndustryInfo=this.navParms.get('IndustryInfo');
        this.title=this.IndustryInfo.indu_name+" Info";
    }
  }

  IndustryProfile(){
    //this.webService.presentAlert('Warning!','this card show about industry profile Info');
    this.navCtrl.push(IndustryDetailsPage,{'IndustryInfo':this.IndustryInfo});
  }

  IndustryUserTypeInfo(){
    //this.webService.presentAlert('Warning!','this card show about industry User Type Info');
    this.navCtrl.push(IndustryUserTypePage,{'IndustryInfo':this.IndustryInfo});
  }

  IndustryUserInfo(){
    //this.webService.presentAlert('Warning!','this card show about industry User Info');
    this.navCtrl.push(IndustryUserPage,{'IndustryInfo':this.IndustryInfo});
  }

  IndustryEquipInfo(){
    //this.webService.presentAlert('Warning!','this card show about industry Equipment Info');
    this.navCtrl.push(IndustryEquipmentPage,{'IndustryInfo':this.IndustryInfo});
  }

  IndustryMaterialInfo(){
    //this.webService.presentAlert('Warning!','this card show about industry Material Info');
    this.navCtrl.push(IndustryMaterialPage,{'IndustryInfo':this.IndustryInfo});
  }

  IndustryStageEquipInfo(){
    //this.webService.presentAlert('Warning!','this card show about industry Stage Equipment Info');
    this.navCtrl.push(IndustryStageEquipPage,{'IndustryInfo':this.IndustryInfo});
  }

  IndustryShiftInfo(){
    //this.webService.presentAlert('Warning!','this card show about industry Shift Info');
    this.navCtrl.push(IndustryShiftPage,{'IndustryInfo':this.IndustryInfo});
  }

  IndustryLotsInfo(){
    //this.webService.presentAlert('Warning!','this card show about industry Lots Info');
    this.navCtrl.push(IndustryLotsPage,{'IndustryInfo':this.IndustryInfo});
  }
}
