import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FleetPageRoutingModule } from './fleet-routing.module';

import { FleetPage } from './fleet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FleetPageRoutingModule
  ],
  declarations: [FleetPage]
})
export class FleetPageModule {}
