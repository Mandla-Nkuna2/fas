import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccidentmanagementPageRoutingModule } from './accidentmanagement-routing.module';

import { AccidentmanagementPage } from './accidentmanagement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccidentmanagementPageRoutingModule
  ],
  declarations: [AccidentmanagementPage]
})
export class AccidentmanagementPageModule {}
