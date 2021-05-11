import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FixedcostdetailsPageRoutingModule } from './fixedcostdetails-routing.module';

import { FixedcostdetailsPage } from './fixedcostdetails.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FixedcostdetailsPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule,
  ],
  declarations: [FixedcostdetailsPage]
})
export class FixedcostdetailsPageModule {}
