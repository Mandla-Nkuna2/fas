import { AdditionalCost } from '../../models/AdditionalCost.model';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-additionalcosts',
  templateUrl: './additionalcosts.page.html',
  styleUrls: ['./additionalcosts.page.scss'],
})
export class AdditionalcostsPage implements OnInit {
  additionalCost: AdditionalCost

  additionalCostDesc: any []

  constructor(private navCtrl: NavController) {
    this.additionalCost = new AdditionalCost();
   }

  ngOnInit() {
  }

  goAutoCard()
  {
    this.navCtrl.navigateForward('autocardetails');
  }

  onAdditionalCostDesc(){}
  onAdditionalCostDescLeft(){}

  onAdditionalCostSel(obj){

  }

  onAdd(){

  }

  onDelete(){

  }

  onClear(){

  }

  onModify(){

  }

}
