import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FixedcostransferPageRoutingModule } from './fixedcostransfer-routing.module';

import { FixedcostransferPage } from './fixedcostransfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FixedcostransferPageRoutingModule
  ],
  declarations: [FixedcostransferPage]
})
export class FixedcostransferPageModule {}
