import { NgModule } from '@angular/core';

import {DockModule} from 'primeng/dock';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import {ImageModule} from 'primeng/image';


@NgModule({
  exports: [
    DockModule,
    MenubarModule,
    ButtonModule,
    ToggleButtonModule,
    TimelineModule,
    CardModule,
    ImageModule
  ]
})
export class PrimeNgModule { }
