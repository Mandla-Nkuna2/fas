import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiretrackingPageRoutingModule } from './tiretracking-routing.module';

import { TiretrackingPage } from './tiretracking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiretrackingPageRoutingModule
  ],
  declarations: [TiretrackingPage]
})
export class TiretrackingPageModule {}
