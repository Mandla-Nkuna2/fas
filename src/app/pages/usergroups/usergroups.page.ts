import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usergroups',
  templateUrl: './usergroups.page.html',
  styleUrls: ['./usergroups.page.scss'],
})
export class UsergroupsPage implements OnInit {
  userGroups: any
  constructor() { }

  ngOnInit() {
  }

}
