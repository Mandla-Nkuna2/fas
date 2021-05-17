import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceSchedulesPageRoutingModule } from './service-schedules-routing.module';

import { ServiceSchedulesPage } from './service-schedules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceSchedulesPageRoutingModule
  ],
  declarations: [ServiceSchedulesPage]
})
export class ServiceSchedulesPageModule {}
