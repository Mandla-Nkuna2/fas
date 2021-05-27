import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-makmoddetails',
  templateUrl: './makmoddetails.component.html',
  styleUrls: ['./makmoddetails.component.scss'],
})
export class MakmoddetailsComponent implements OnInit {
  constructor(
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {}
}
