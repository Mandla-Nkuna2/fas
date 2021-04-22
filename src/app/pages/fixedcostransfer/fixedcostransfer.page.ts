import { Component, OnInit } from '@angular/core';
import FixedCostTransfer from 'src/app/models/FixedCostTransfer.model';

@Component({
  selector: 'app-fixedcostransfer',
  templateUrl: './fixedcostransfer.page.html',
  styleUrls: ['./fixedcostransfer.page.scss'],
})
export class FixedcostransferPage implements OnInit {
  fixedCostTransf: FixedCostTransfer

  constructor() {
    this.fixedCostTransf = new FixedCostTransfer()
   }

  ngOnInit() {
  }

}
