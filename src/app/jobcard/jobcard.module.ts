import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobcardPageRoutingModule } from './jobcard-routing.module';

import { JobcardPage } from './jobcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobcardPageRoutingModule
  ],
  declarations: [JobcardPage]
})
export class JobcardPageModule {}
