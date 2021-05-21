import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FautorespcodePageRoutingModule } from './fautorespcode-routing.module';

import { FautorespcodePage } from './fautorespcode.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FautorespcodePageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [FautorespcodePage]
})
export class FautorespcodePageModule {}
