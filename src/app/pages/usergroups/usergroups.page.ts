import UserGroup  from 'src/app/models/systemmanagement/UserGroup.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usergroups',
  templateUrl: './usergroups.page.html',
  styleUrls: ['./usergroups.page.scss'],
})
export class UsergroupsPage implements OnInit {
  userGroup: UserGroup
  userGroups: UserGroup[]

  constructor() {
    this.userGroup = new UserGroup
  }

  ngOnInit() {
  }

  onAdd(){}
  onModify(){}
  onDeActivate(){}
  onClear(){}
}
