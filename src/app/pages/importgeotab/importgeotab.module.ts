import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportgeotabPageRoutingModule } from './importgeotab-routing.module';

import { ImportgeotabPage } from './importgeotab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportgeotabPageRoutingModule
  ],
  declarations: [ImportgeotabPage]
})
export class ImportgeotabPageModule {}
