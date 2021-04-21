import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StafftimesheetsPageRoutingModule } from './stafftimesheets-routing.module';

import { StafftimesheetsPage } from './stafftimesheets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StafftimesheetsPageRoutingModule
  ],
  declarations: [StafftimesheetsPage]
})
export class StafftimesheetsPageModule {}
