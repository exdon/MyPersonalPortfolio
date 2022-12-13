import { NgModule } from '@angular/core';

import {DockModule} from 'primeng/dock';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {ToggleButtonModule} from 'primeng/togglebutton';

@NgModule({
  exports: [
    DockModule,
    MenubarModule,
    ButtonModule,
    ToggleButtonModule
  ]
})
export class PrimeNgModule { }
