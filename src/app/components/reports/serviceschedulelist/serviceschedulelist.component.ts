import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-serviceschedulelist',
  templateUrl: './serviceschedulelist.component.html',
  styleUrls: ['./serviceschedulelist.component.scss'],
})
export class ServiceschedulelistComponent implements OnInit {
  constructor(
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {}
}
