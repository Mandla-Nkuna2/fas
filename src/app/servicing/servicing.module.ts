import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicingPageRoutingModule } from './servicing-routing.module';

import { ServicingPage } from './servicing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicingPageRoutingModule
  ],
  declarations: [ServicingPage]
})
export class ServicingPageModule {}
