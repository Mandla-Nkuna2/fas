import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevenuePageRoutingModule } from './revenue-routing.module';

import { RevenuePage } from './revenue.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevenuePageRoutingModule,
    ComponentsModule,
    IonicSelectableModule,
  ],
  declarations: [RevenuePage]
})
export class RevenuePageModule {}
