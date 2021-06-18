import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-overheadexpenditure',
  templateUrl: './overheadexpenditure.component.html',
  styleUrls: ['./overheadexpenditure.component.scss'],
})
export class OverheadexpenditureComponent implements OnInit {
  finYear: any;
  finYears = ['2019/2020', '2020/2021', '2021/2022'];

  constructor() {}

  ngOnInit() {}
}
