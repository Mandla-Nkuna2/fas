import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccidentmanagementPageRoutingModule } from './accidentmanagement-routing.module';

import { AccidentmanagementPage } from './accidentmanagement.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccidentmanagementPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule,
  ],
  declarations: [AccidentmanagementPage]
})
export class AccidentmanagementPageModule {}
