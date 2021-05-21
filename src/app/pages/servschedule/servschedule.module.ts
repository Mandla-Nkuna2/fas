import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServschedulePageRoutingModule } from './servschedule-routing.module';

import { ServschedulePage } from './servschedule.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServschedulePageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [ServschedulePage]
})
export class ServschedulePageModule {}
