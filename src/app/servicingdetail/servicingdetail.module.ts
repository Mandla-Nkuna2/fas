import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicingdetailPageRoutingModule } from './servicingdetail-routing.module';

import { ServicingdetailPage } from './servicingdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicingdetailPageRoutingModule
  ],
  declarations: [ServicingdetailPage]
})
export class ServicingdetailPageModule {}
