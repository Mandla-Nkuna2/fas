import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportfirstautotransPageRoutingModule } from './importfirstautotrans-routing.module';

import { ImportfirstautotransPage } from './importfirstautotrans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportfirstautotransPageRoutingModule
  ],
  declarations: [ImportfirstautotransPage]
})
export class ImportfirstautotransPageModule {}
