import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaResponsbltCodesPageRoutingModule } from './fa-responsblt-codes-routing.module';

import { FaResponsbltCodesPage } from './fa-responsblt-codes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaResponsbltCodesPageRoutingModule
  ],
  declarations: [FaResponsbltCodesPage]
})
export class FaResponsbltCodesPageModule {}
