import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbsaimportPageRoutingModule } from './absaimport-routing.module';

import { AbsaimportPage } from './absaimport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbsaimportPageRoutingModule
  ],
  declarations: [AbsaimportPage]
})
export class AbsaimportPageModule {}
