import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import OverheadTransaction from 'src/app/models/OverheadTransaction.model';

@Component({
  selector: 'app-overheadtrans',
  templateUrl: './overheadtrans.page.html',
  styleUrls: ['./overheadtrans.page.scss'],
})
export class OverheadtransPage implements OnInit {
  overheadTrans: OverheadTransaction

  placeOrDest: any[]

  constructor(private navCtrl: NavController) {
    this.overheadTrans = new OverheadTransaction()
   }

  ngOnInit() {
  }

  goStaffTimeSheet()
  {
    this.navCtrl.navigateForward('stafftimesheets');
  }

  onPlaceOrDest(){}
  onPlaceOrDestLeft(){}

  onOverheadType(){}
  onOverheadTypeLeft(){}

  onCostCentre(){}
  onCostCentreLeft(){}

  onPlaceOrDestSel(obj){}
}
