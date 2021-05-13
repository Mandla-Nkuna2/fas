import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverheadbudgetPageRoutingModule } from './overheadbudget-routing.module';

import { OverheadbudgetPage } from './overheadbudget.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverheadbudgetPageRoutingModule
  ],
  declarations: [OverheadbudgetPage]
})
export class OverheadbudgetPageModule {}
