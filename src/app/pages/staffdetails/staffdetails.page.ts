import { Component, OnInit } from '@angular/core';
import StaffDet from 'src/app/models/capture/StaffDet.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';


@Component({
  selector: 'app-staffdetails',
  templateUrl: './staffdetails.page.html',
  styleUrls: ['./staffdetails.page.scss'],
})
export class StaffdetailsPage implements OnInit {
  staffDet: StaffDet

  staffCat: any []

  constructor(private firebaseService: FirebaseService,
    private popUp: PopupHelper, private firebaseGetServ:
    FirebaseGetService) { }

  ngOnInit() {
  }

  onStaffCat(){}
  onStaffCatLeft(){}

  onAdd(){}
  onModify(){}
  onDeActivate(){}
  onClear(){}
}
