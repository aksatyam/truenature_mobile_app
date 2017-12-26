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
  public UserTypeCount:any;
  public UserCount:any;
  public EquipCount:any;
  public MaterialCount:any;
  public StageEquipCount:any;
  public ShiftCount:any;
  public LotsCount:any;  
  public Status:boolean=false;

  constructor(public navCtrl: NavController, public webService:ServiceSingletonProvider, public navParms:NavParams) {
    if(this.navParms.get('IndustryInfo')){
        this.IndustryInfo=this.navParms.get('IndustryInfo');
        this.title=this.IndustryInfo.indu_name+" Info";
    }
    this.getCount();
  }

  ionViewDidEnter(){
    if(this.Status){
      this.getCount();
    }
    this.Status=true;
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

  getCount(){
    this.webService.presentLoading();
    this.webService.getAllIndutsryType(this.IndustryInfo._id).then(data=>{
      this.UserTypeCount=data['data'].length;
      console.log(this.UserTypeCount);
    });

    this.webService.getAllIndustryUser(this.IndustryInfo._id).then(data=>{
      this.UserCount=data['data'].length;
      console.log(this.UserCount);
    });

    this.webService.getIndustryAllEquip(this.IndustryInfo._id).then(data=>{
      this.EquipCount=data['data'].length;
      console.log(this.EquipCount);
    });

    this.webService.getIndustryAllMaterial(this.IndustryInfo._id).then(data=>{
      this.MaterialCount=data['data'].length;
      console.log(this.MaterialCount);
    });

    this.webService.getIndustryAllSatgeEquip(this.IndustryInfo._id).then(data=>{
      this.StageEquipCount=data['data'].length;
      console.log(this.StageEquipCount);
    });

    this.webService.getIndustryAllShift(this.IndustryInfo._id).then(data=>{
      this.ShiftCount=data['data'].length;
      console.log(this.ShiftCount);
    });

    this.webService.getIndustryAllLots(this.IndustryInfo._id).then(data=>{
      this.LotsCount=data['data'].length;
      console.log(this.LotsCount);
      this.webService.stopLoading();
    });
  }
}
