import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupplierdetailsPageRoutingModule } from './supplierdetails-routing.module';

import { SupplierdetailsPage } from './supplierdetails.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupplierdetailsPageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [SupplierdetailsPage]
})
export class SupplierdetailsPageModule {}
