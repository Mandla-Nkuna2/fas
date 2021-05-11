import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FixedcostransferPageRoutingModule } from './fixedcostransfer-routing.module';

import { FixedcostransferPage } from './fixedcostransfer.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FixedcostransferPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule
  ],
  declarations: [FixedcostransferPage]
})
export class FixedcostransferPageModule {}
