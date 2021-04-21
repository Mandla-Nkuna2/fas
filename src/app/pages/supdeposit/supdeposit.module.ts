import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupdepositPageRoutingModule } from './supdeposit-routing.module';

import { SupdepositPage } from './supdeposit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupdepositPageRoutingModule
  ],
  declarations: [SupdepositPage]
})
export class SupdepositPageModule {}
