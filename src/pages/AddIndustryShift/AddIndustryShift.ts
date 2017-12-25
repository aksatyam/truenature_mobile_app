import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ServiceSingletonProvider } from '../../providers/service-singleton/service-singleton';

@Component({
  selector: 'page-AddIndustryShift',
  templateUrl: 'AddIndustryShift.html'
})
export class AddIndustryShiftPage {
  public IndustryId:any;
  public title:any="Add Shift";
  constructor(public navCtrl: NavController,
        public navParms: NavParams,
        public webService: ServiceSingletonProvider) {
          if(this.navParms.get('IndustryId')){
            this.IndustryId=this.navParms.get('IndustryId');
        }
  }

  SaveShift(){

  }

  Reset(){
      
  }
}