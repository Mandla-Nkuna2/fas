import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-servicing',
  templateUrl: './servicing.page.html',
  styleUrls: ['./servicing.page.scss'],
})
export class ServicingPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }


  goDetails()
  {
    this.navCtrl.navigateForward('servicingdetail');
  }

}
