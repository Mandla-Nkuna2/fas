import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import OilIssue from 'src/app/models/OilIssue.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-oilissues',
  templateUrl: './oilissues.page.html',
  styleUrls: ['./oilissues.page.scss'],
})
export class OilissuesPage implements OnInit {
  oilIssue: OilIssue

  voucherNo: any[]
  registration: any [];
  oilStore: any [];
  supplier: any [];
  costCentre: any [];
  staffCode: any [];

  constructor( private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper, private firebaseGetServ:
    FirebaseGetService) {
    this.oilIssue = new OilIssue()
   }

  ngOnInit() {
    // this.onRegistration()
    // this.onOilStore()
    // this.onSupplier()
    // this.onCostCentre()
    // this.onStaffCode()
  }

  goOilTransactions()
  {
    this.navCtrl.navigateForward('oilstoretrans');
  }
  onRegistration(){
    this.firebaseGetServ.getRegistration().then((mNm: any) => {
      this.registration = mNm
    })
  }
  onRegistrationLeft(){
    this.firebaseGetServ.getRegistrationLeft().then((mNm: any) => {
      this.registration = mNm
    })
  }

  onComponent(){}
  onComponentLeft(){}

  onOilStore(){
    this.firebaseGetServ.getOilStore().then((mNm: any) => {
      this.oilStore = mNm
    })
  }

  onSupplier(){
    this.firebaseGetServ.getSupplier().then((mNm: any) => {
      this.supplier = mNm
    })
  }
  onSupplierLeft(){
    this.firebaseGetServ.getSupplierLeft().then((mNm: any) => {
      this.supplier = mNm
    })
  }

  onOilType(){}
  onOilTypeLeft(){}

  onCostCentre(){
    this.firebaseGetServ.getCostCentre().then((mNm: any) => {
      this.costCentre = mNm
    })
  }

  onStaffCode(){
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.staffCode = mNm
    })
  }
  onStaffCodeLeft(){
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.staffCode = mNm
    })
  }

  onAdd(){}
}
