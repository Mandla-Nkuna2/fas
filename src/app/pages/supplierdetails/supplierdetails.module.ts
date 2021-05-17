import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupplierdetailsPageRoutingModule } from './supplierdetails-routing.module';

import { SupplierdetailsPage } from './supplierdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupplierdetailsPageRoutingModule
  ],
  declarations: [SupplierdetailsPage]
})
export class SupplierdetailsPageModule {}
