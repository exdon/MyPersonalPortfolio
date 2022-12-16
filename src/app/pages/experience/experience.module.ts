import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';


@NgModule({
  declarations: [
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    SharedModule,
    TranslateModule
  ],
  exports: [ ExperienceComponent ]
})
export class ExperienceModule { }
