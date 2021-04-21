import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FixedcostdetailsPageRoutingModule } from './fixedcostdetails-routing.module';

import { FixedcostdetailsPage } from './fixedcostdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FixedcostdetailsPageRoutingModule
  ],
  declarations: [FixedcostdetailsPage]
})
export class FixedcostdetailsPageModule {}
