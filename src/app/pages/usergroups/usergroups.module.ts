import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsergroupsPageRoutingModule } from './usergroups-routing.module';

import { UsergroupsPage } from './usergroups.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsergroupsPageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [UsergroupsPage]
})
export class UsergroupsPageModule {}
