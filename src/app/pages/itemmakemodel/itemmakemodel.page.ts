import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemmakemodel',
  templateUrl: './itemmakemodel.page.html',
  styleUrls: ['./itemmakemodel.page.scss'],
})
export class ItemmakemodelPage implements OnInit {

  item: any
  constructor() { }

  ngOnInit() {
  }

  onAdd(){}
  onModify(){}
  onDeActivate(){}
  onClear(){}
}
