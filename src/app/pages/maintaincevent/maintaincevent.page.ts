import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-maintaincevent',
  templateUrl: './maintaincevent.page.html',
  styleUrls: ['./maintaincevent.page.scss'],
})
export class MaintainceventPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goOilIssues()
  {
    this.navCtrl.navigateForward('oilissues');
  }

}
