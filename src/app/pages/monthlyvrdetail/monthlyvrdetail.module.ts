import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthlyvrdetailPageRoutingModule } from './monthlyvrdetail-routing.module';

import { MonthlyvrdetailPage } from './monthlyvrdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthlyvrdetailPageRoutingModule
  ],
  declarations: [MonthlyvrdetailPage]
})
export class MonthlyvrdetailPageModule {}
