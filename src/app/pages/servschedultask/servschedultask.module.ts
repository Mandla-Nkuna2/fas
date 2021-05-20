import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServschedultaskPageRoutingModule } from './servschedultask-routing.module';

import { ServschedultaskPage } from './servschedultask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServschedultaskPageRoutingModule
  ],
  declarations: [ServschedultaskPage]
})
export class ServschedultaskPageModule {}
