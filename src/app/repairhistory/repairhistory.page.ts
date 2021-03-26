import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-repairhistory',
  templateUrl: './repairhistory.page.html',
  styleUrls: ['./repairhistory.page.scss'],
})
export class RepairhistoryPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goDetail()
  {
    this.navCtrl.navigateForward('repairhistorydetail');
  }

}
