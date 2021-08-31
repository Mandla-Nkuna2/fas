import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddstaffinfoPageRoutingModule } from './addstaffinfo-routing.module';

import { AddstaffinfoPage } from './addstaffinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddstaffinfoPageRoutingModule
  ],
  declarations: [AddstaffinfoPage]
})
export class AddstaffinfoPageModule {}
