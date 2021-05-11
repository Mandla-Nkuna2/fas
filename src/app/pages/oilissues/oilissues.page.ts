import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import OilIssue from 'src/app/models/OilIssue.model';

@Component({
  selector: 'app-oilissues',
  templateUrl: './oilissues.page.html',
  styleUrls: ['./oilissues.page.scss'],
})
export class OilissuesPage implements OnInit {
  oilIssue: OilIssue

  voucherNo: any[]

  constructor( private navCtrl: NavController ) {
    this.oilIssue = new OilIssue()
   }

  ngOnInit() {
  }

  goOilTransactions()
  {
    this.navCtrl.navigateForward('oilstoretrans');
  }

  onVoucherNo(){}
  onVoucherNoLeft(){}

  onRegistration(){}
  onRegistrationLeft(){}

  onComponent(){}
  onComponentLeft(){}

  onOilStore(){}
  onOilStoreLeft(){}

  onSupplier(){}
  onSupplierLeft(){}

  onOilType(){}
  onOilTypeLeft(){}

  onCostCentre(){}
  CostCentreLeft(){}

  onStaffCode(){}
  onStaffCodeLeft(){}

  onVoucherNoSel(obj){}

  onAdd(){
  }


}
