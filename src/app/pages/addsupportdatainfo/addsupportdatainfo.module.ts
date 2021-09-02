import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddsupportdatainfoPageRoutingModule } from './addsupportdatainfo-routing.module';

import { AddsupportdatainfoPage } from './addsupportdatainfo.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddsupportdatainfoPageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [AddsupportdatainfoPage],
})
export class AddsupportdatainfoPageModule {}
