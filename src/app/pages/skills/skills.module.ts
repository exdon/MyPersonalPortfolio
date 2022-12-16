import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';


@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    SharedModule
  ]
})
export class SkillsModule { }
