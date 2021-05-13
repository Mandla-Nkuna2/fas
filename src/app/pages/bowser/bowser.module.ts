import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BowserPageRoutingModule } from './bowser-routing.module';

import { BowserPage } from './bowser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BowserPageRoutingModule
  ],
  declarations: [BowserPage]
})
export class BowserPageModule {}
