import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddassetsPageRoutingModule } from './addassets-routing.module';

import { AddassetsPage } from './addassets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddassetsPageRoutingModule
  ],
  declarations: [AddassetsPage]
})
export class AddassetsPageModule {}
