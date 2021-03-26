import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffproreportPageRoutingModule } from './staffproreport-routing.module';

import { StaffproreportPage } from './staffproreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffproreportPageRoutingModule
  ],
  declarations: [StaffproreportPage]
})
export class StaffproreportPageModule {}
