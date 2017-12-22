import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ServiceSingletonProvider } from '../../providers/service-singleton/service-singleton';

@Component({
  selector: 'page-IndustryEquipment',
  templateUrl: 'IndustryEquipment.html'
})
export class IndustryEquipmentPage {
  public title:any="Industry Equipment";
  public IndustryInfo:any;
  public industyDeatils:any='Industry Equipments';
  public IndustryID:any;
  constructor(public navCtrl: NavController,
              public navParms: NavParams,
              public webService: ServiceSingletonProvider) {
    if(this.navParms.get('IndustryInfo')){
      this.IndustryInfo=this.navParms.get('IndustryInfo');
    }
    console.log(this.IndustryInfo);
    this.title=this.IndustryInfo.indu_name;
    this.IndustryID=this.IndustryInfo._id;
    this.CallWebServices();
  }

  addInduEquipment(){

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      this.CallWebServices();
      refresher.complete();
    }, 2000);
  }

  CallWebServices(){
    this.webService.presentLoading();
    this.webService.getIndustryAllEquip(this.IndustryID).then(data=>{
      this.webService.stopLoading();
      console.log(data);
    })
  }
}
