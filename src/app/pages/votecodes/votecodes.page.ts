import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votecodes',
  templateUrl: './votecodes.page.html',
  styleUrls: ['./votecodes.page.scss'],
})
export class VotecodesPage implements OnInit {
  voteCode: any

  constructor() { }

  ngOnInit() {
  }

  onAdd(){}
  onModify(){}
  onDeActivate(){}
  onClear(){}
}
