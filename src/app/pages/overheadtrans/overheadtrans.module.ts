import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverheadtransPageRoutingModule } from './overheadtrans-routing.module';

import { OverheadtransPage } from './overheadtrans.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverheadtransPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule
  ],
  declarations: [OverheadtransPage]
})
export class OverheadtransPageModule {}
