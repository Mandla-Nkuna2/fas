import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StannicimportPageRoutingModule } from './stannicimport-routing.module';

import { StannicimportPage } from './stannicimport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StannicimportPageRoutingModule
  ],
  declarations: [StannicimportPage]
})
export class StannicimportPageModule {}
