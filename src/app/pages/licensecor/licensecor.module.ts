import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicensecorPageRoutingModule } from './licensecor-routing.module';

import { LicensecorPage } from './licensecor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicensecorPageRoutingModule
  ],
  declarations: [LicensecorPage]
})
export class LicensecorPageModule {}
