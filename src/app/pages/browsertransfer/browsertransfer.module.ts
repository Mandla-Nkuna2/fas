import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowsertransferPageRoutingModule } from './browsertransfer-routing.module';

import { BrowsertransferPage } from './browsertransfer.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowsertransferPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule,
  ],
  declarations: [BrowsertransferPage]
})
export class BrowsertransferPageModule {}
