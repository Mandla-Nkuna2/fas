import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BowserPageRoutingModule } from './bowser-routing.module';

import { BowserPage } from './bowser.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BowserPageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [BowserPage]
})
export class BowserPageModule {}
