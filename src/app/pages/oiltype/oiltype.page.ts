import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oiltype',
  templateUrl: './oiltype.page.html',
  styleUrls: ['./oiltype.page.scss'],
})
export class OiltypePage implements OnInit {
  oilType: any

  constructor() { }

  ngOnInit() {
  }

  onAdd(){}
  onModify(){}
  onDeActivate(){}
  onClear(){}
}
