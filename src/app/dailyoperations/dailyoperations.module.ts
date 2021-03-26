import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyoperationsPageRoutingModule } from './dailyoperations-routing.module';

import { DailyoperationsPage } from './dailyoperations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyoperationsPageRoutingModule
  ],
  declarations: [DailyoperationsPage]
})
export class DailyoperationsPageModule {}
