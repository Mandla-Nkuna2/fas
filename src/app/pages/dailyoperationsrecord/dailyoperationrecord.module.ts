import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyoperationrecordPageRoutingModule } from './dailyoperationrecord-routing.module';

import { DailyoperationrecordPage } from './dailyoperationrecord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyoperationrecordPageRoutingModule
  ],
  declarations: [DailyoperationrecordPage]
})
export class DailyoperationrecordPageModule {}
