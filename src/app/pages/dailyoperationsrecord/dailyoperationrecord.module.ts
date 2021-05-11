import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyoperationrecordPageRoutingModule } from './dailyoperationrecord-routing.module';

import { DailyoperationrecordPage } from './dailyoperationrecord.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyoperationrecordPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule,
  ],
  declarations: [DailyoperationrecordPage]
})
export class DailyoperationrecordPageModule {}
