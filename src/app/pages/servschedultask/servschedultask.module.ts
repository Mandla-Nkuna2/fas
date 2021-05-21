import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServschedultaskPageRoutingModule } from './servschedultask-routing.module';

import { ServschedultaskPage } from './servschedultask.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServschedultaskPageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [ServschedultaskPage]
})
export class ServschedultaskPageModule {}
