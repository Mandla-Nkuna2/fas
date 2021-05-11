import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import FixedCostsDet from 'src/app/models/FixedCostsDet.model';

@Component({
  selector: 'app-fixedcostdetails',
  templateUrl: './fixedcostdetails.page.html',
  styleUrls: ['./fixedcostdetails.page.scss'],
})
export class FixedcostdetailsPage implements OnInit {
  fixedCost: FixedCostsDet

  fixedCostType: any []

  constructor( private navCtrl: NavController ) {
    this.fixedCost = new FixedCostsDet()
   }

  ngOnInit() {
  }

  goTransfer()
  {
    this.navCtrl.navigateForward('fixedcostransfer');
  }

  onFixedCostType(){}
  onFixedCostTypeLeft(){}

  onRegistraion(){}
  onRegistraionLeft(){}

  onCalculatePer(){}
  onCalculatePerLeft(){}

  onFixedCostTypeSel(obj){

  }
}
