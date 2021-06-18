import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-bowsersummary',
  templateUrl: './bowsersummary.component.html',
  styleUrls: ['./bowsersummary.component.scss'],
})
export class BowsersummaryComponent implements OnInit {
  dateScope: any;

  finYear: any;
  finYears = ['2019/2020', '2020/2021', '2021/2022'];

  dateFrom: any;
  dateTo: any;

  constructor() {}

  ngOnInit() {}
}
