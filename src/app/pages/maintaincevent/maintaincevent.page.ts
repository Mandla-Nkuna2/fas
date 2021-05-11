import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import MaintenanceEvent from 'src/app/models/MaintenanceEvent.model';

@Component({
  selector: 'app-maintaincevent',
  templateUrl: './maintaincevent.page.html',
  styleUrls: ['./maintaincevent.page.scss'],
})
export class MaintainceventPage implements OnInit {
  maintenanceEvent: MaintenanceEvent

  jobCardNo: any []

  constructor(private navCtrl: NavController) {
    this.maintenanceEvent = new MaintenanceEvent()
   }

  ngOnInit() {
  }

  goOilIssues()
  {
    this.navCtrl.navigateForward('oilissues');
  }

  onJobCardNo(){}
  onJobCardNoLeft(){}

  onRegistration(){}
  onRegistrationLeft(){}

  onMaintType(){}
  onMaintTypeLeft(){}

  onMaintReason(){}
  onMaintReasonLeft(){}

  onSupplier(){}
  onSupplierLeft(){}

  onRequestedBy(){}
  onRequestedByLeft(){}

  onConstCentre(){}
  onConstCentreLeft(){}

  onJobCardNoSel(obj){

  }
}
