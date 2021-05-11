import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { myDropdownComponent }  from './dropdownComponent/myDropdown.component';
import { ClickOutsideDirective } from '../shared/clickOutside.directive'
import { DropdownDirective } from '../shared/dropdown.directive'
import { ClickOutsideModule } from 'ng-click-outside';



@NgModule({
  entryComponents: [myDropdownComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClickOutsideModule
  ],
  declarations: [myDropdownComponent, ClickOutsideDirective, DropdownDirective],
  exports: [myDropdownComponent, ClickOutsideDirective, DropdownDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
