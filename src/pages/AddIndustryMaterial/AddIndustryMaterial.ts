import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ServiceSingletonProvider } from '../../providers/service-singleton/service-singleton';

@Component({
  selector: 'page-AddIndustryMaterial',
  templateUrl: 'AddIndustryMaterial.html'
})
export class AddIndustryMaterialPage {
  public IndustryId:any;
  public title:any="Add Materials";
  public MaterialName:any='';
  public Description:any='';
  constructor(public navCtrl: NavController,
        public navParms: NavParams,
        public webService: ServiceSingletonProvider) {
          if(this.navParms.get('IndustryId')){
            this.IndustryId=this.navParms.get('IndustryId');
        }
  }

  SaveEquip(){

  }

  Reset(){

  }
}