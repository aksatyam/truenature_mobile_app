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
  public ShiftName:any='';
  public Description:any='';
  public ShiftTime:any='';
  public timeStarts:any;
  public timeEnds:any;
  constructor(public navCtrl: NavController,
        public navParms: NavParams,
        public webService: ServiceSingletonProvider) {
          if(this.navParms.get('IndustryId')){
            this.IndustryId=this.navParms.get('IndustryId');
        }
  }

  timeChange(){
    console.log(this.timeStarts);
    console.log(this.timeEnds);
  }


  SaveShift(){
    if(this.ShiftName=='' && this.ShiftTime=='' && this.timeStarts=='' && this.timeEnds=='' && this.Description){
      this.webService.presentAlert('Success!','')
    }
  }

  Reset(){
      
  }
}