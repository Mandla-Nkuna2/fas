import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowsertransactionsPageRoutingModule } from './browsertransactions-routing.module';

import { BrowsertransactionsPage } from './browsertransactions.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowsertransactionsPageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [BrowsertransactionsPage],
})
export class BrowsertransactionsPageModule {}
