import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParametersPageRoutingModule } from './parameters-routing.module';

import { ParametersPage } from './parameters.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParametersPageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [ParametersPage]
})
export class ParametersPageModule {}
