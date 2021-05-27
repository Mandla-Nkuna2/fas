import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budgetrep',
  templateUrl: './budgetrep.component.html',
  styleUrls: ['./budgetrep.component.scss'],
})
export class BudgetrepComponent implements OnInit {
  finYear: any;
  finYears = ['2019/2020', '2020/2021', '2021/2022'];

  constructor() {}

  ngOnInit() {}
}
