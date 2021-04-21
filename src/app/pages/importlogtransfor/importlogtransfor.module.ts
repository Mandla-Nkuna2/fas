import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportlogtransforPageRoutingModule } from './importlogtransfor-routing.module';

import { ImportlogtransforPage } from './importlogtransfor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportlogtransforPageRoutingModule
  ],
  declarations: [ImportlogtransforPage]
})
export class ImportlogtransforPageModule {}
