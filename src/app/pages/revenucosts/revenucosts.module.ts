import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevenucostsPageRoutingModule } from './revenucosts-routing.module';

import { RevenucostsPage } from './revenucosts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevenucostsPageRoutingModule
  ],
  declarations: [RevenucostsPage]
})
export class RevenucostsPageModule {}
