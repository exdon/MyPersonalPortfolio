import { ExperienceModule } from './../experience/experience.module';
import { ProjectsModule } from './../projects/projects.module';
import { SkillsModule } from './../skills/skills.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { AboutModule } from '../about/about.module';
import { ContactModule } from '../contact/contact.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AboutModule,
    SkillsModule,
    ProjectsModule,
    ExperienceModule,
    ContactModule,
    TranslateModule,
    SharedModule
  ]
})
export class HomeModule { }
