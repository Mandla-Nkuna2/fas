import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffdetailsPageRoutingModule } from './staffdetails-routing.module';

import { StaffdetailsPage } from './staffdetails.page';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffdetailsPageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [StaffdetailsPage]
})
export class StaffdetailsPageModule {}
