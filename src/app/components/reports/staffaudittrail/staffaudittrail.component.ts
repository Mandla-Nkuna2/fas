import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-staffaudittrail',
  templateUrl: './staffaudittrail.component.html',
  styleUrls: ['./staffaudittrail.component.scss'],
})
export class StaffaudittrailComponent implements OnInit {
  dateScope: any;

  finYear: any;
  finYears = ['2019/2020', '2020/2021', '2021/2022'];

  dateFrom: any;
  dateTo: any;

  constructor() {}

  ngOnInit() {}
}
