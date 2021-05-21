import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VotecodesPageRoutingModule } from './votecodes-routing.module';

import { VotecodesPage } from './votecodes.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VotecodesPageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [VotecodesPage]
})
export class VotecodesPageModule {}
