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
    ContactModule,
    TranslateModule
  ]
})
export class HomeModule { }
