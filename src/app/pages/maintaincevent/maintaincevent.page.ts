import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import MaintenanceEvent from 'src/app/models/MaintenanceEvent.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-maintaincevent',
  templateUrl: './maintaincevent.page.html',
  styleUrls: ['./maintaincevent.page.scss'],
})
export class MaintainceventPage implements OnInit {
  maintenanceEvent: MaintenanceEvent

  jobCardNo: any []
  registration: any []
  maintanceType: any []
  maintanceReason: any [];
  supplier: any [];
  requestedBy: any [];
  costCentre: any [];

  constructor(private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService) {
    this.maintenanceEvent = new MaintenanceEvent()
   }

  ngOnInit() {
    // this.onJobCardNo()
    // this.onRegistration()
    // this.onMaintType()
    // this.onMaintReason()
    // this.onSupplier()
    // this.onRequestedBy()
    // this.onConstCentre()
  }

  goOilIssues()
  {
    this.navCtrl.navigateForward('oilissues');
  }

  onJobCardNo(){
    // this.firebaseGetServ.getJobCardNos().then((staff: any) => {
    //   this.jobCardNo = staff
    // })
  }
  onJobCardNoLeft(){
    // this.firebaseGetServ.getJobCardNosLeft().then((staff: any) => {
    //   this.jobCardNo = staff
    // })
  }

  onRegistration(){
    this.firebaseGetServ.getRegistration().then((staff: any) => {
      this.registration = staff
    })
  }
  onRegistrationLeft(){
    this.firebaseGetServ.getRegistrationLeft().then((staff: any) => {
      this.registration = staff
    })
  }

  onMaintType(){
    this.firebaseGetServ.getMaintananceType().then((staff: any) => {
      this.maintanceType = staff
    })
  }

  onMaintReason(){
    this.firebaseGetServ.getMaintananceRzn().then((staff: any) => {
      this.maintanceReason = staff
    })
  }

  onSupplier(){
    this.firebaseGetServ.getSupplier().then((staff: any) => {
      this.supplier = staff
    })
  }
  onSupplierLeft(){
    this.firebaseGetServ.getSupplierLeft().then((staff: any) => {
      this.supplier = staff
    })
  }

  onRequestedBy(){
    this.firebaseGetServ.getStaff().then((staff: any) => {
      this.requestedBy = staff
    })
  }
  onRequestedByLeft(){
    this.firebaseGetServ.getStaffLeft().then((staff: any) => {
      this.requestedBy = staff
    })
  }

  onConstCentre(){
    this.firebaseGetServ.getCostCentre().then((staff: any) => {
      this.costCentre = staff
    })
  }
}
