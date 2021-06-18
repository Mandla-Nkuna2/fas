import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-oilstoresumm',
  templateUrl: './oilstoresumm.component.html',
  styleUrls: ['./oilstoresumm.component.scss'],
})
export class OilstoresummComponent implements OnInit {
  dateScope: any;

  finYear: any;
  finYears = ['2019/2020', '2020/2021', '2021/2022'];

  dateFrom: any;
  dateTo: any;

  constructor() {}

  ngOnInit() {}
}
