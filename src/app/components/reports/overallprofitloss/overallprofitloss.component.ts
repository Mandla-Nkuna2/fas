import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-overallprofitloss',
  templateUrl: './overallprofitloss.component.html',
  styleUrls: ['./overallprofitloss.component.scss'],
})
export class OverallprofitlossComponent implements OnInit {
  finYear: any;
  finYears = ['2019/2020', '2020/2021', '2021/2022'];

  constructor() {}

  ngOnInit() {}
}
