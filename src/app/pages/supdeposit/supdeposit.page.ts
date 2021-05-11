import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import SupplierDeposit from 'src/app/models/SupplierDeposit.model';

@Component({
  selector: 'app-supdeposit',
  templateUrl: './supdeposit.page.html',
  styleUrls: ['./supdeposit.page.scss'],
})
export class SupdepositPage implements OnInit {
  supplierDeposit: SupplierDeposit

  supplier: any[]

  constructor(private navCtrl: NavController) {
    this.supplierDeposit = new SupplierDeposit()
   }

  ngOnInit() {
  }

  goFuelnOilPrice()
  {
    this.navCtrl.navigateForward('fuelnoilprice');
  }

  onSupplierName(){}
  onSupplierNameLeft(){}

  onSupplierSel(obj){}

}
