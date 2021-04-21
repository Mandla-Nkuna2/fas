import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowsertransferPageRoutingModule } from './browsertransfer-routing.module';

import { BrowsertransferPage } from './browsertransfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowsertransferPageRoutingModule
  ],
  declarations: [BrowsertransferPage]
})
export class BrowsertransferPageModule {}
