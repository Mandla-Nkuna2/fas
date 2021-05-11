import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StafftimesheetsPageRoutingModule } from './stafftimesheets-routing.module';

import { StafftimesheetsPage } from './stafftimesheets.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StafftimesheetsPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule,
  ],
  declarations: [StafftimesheetsPage]
})
export class StafftimesheetsPageModule {}
