import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/systemmanagement/User.model';
import UserGroup from 'src/app/models/systemmanagement/UserGroup.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  user: User
  users: User []
  userGroup: UserGroup
  userGroups: UserGroup[]

  constructor() {
    this.user = new User()
    this.userGroup = new UserGroup()
   }

  ngOnInit() {
  }

  onAdd(){}
  onModify(){}
  onDeActivate(){}
  onClear(){}

}
