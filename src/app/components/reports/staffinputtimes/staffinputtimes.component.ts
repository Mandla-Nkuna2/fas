import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-staffinputtimes',
  templateUrl: './staffinputtimes.component.html',
  styleUrls: ['./staffinputtimes.component.scss'],
})
export class StaffinputtimesComponent implements OnInit {
  dateScope: any;

  finYear: any;
  finYears = ['2019/2020', '2020/2021', '2021/2022'];

  dateFrom: any;
  dateTo: any;

  constructor() {}

  ngOnInit() {}
}
