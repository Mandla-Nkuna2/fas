import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdditionalcostsPageRoutingModule } from './additionalcosts-routing.module';

import { AdditionalcostsPage } from './additionalcosts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdditionalcostsPageRoutingModule
  ],
  declarations: [AdditionalcostsPage]
})
export class AdditionalcostsPageModule {}
