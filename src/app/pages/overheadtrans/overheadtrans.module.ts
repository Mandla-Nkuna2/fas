import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverheadtransPageRoutingModule } from './overheadtrans-routing.module';

import { OverheadtransPage } from './overheadtrans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverheadtransPageRoutingModule
  ],
  declarations: [OverheadtransPage]
})
export class OverheadtransPageModule {}
