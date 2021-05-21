import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servschedule',
  templateUrl: './servschedule.page.html',
  styleUrls: ['./servschedule.page.scss'],
})
export class ServschedulePage implements OnInit {
  servschedule: any

  constructor() { }

  ngOnInit() {
  }

  onAdd(){}
  onModify(){}
  onDeActivate(){}
  onClear(){}
}
