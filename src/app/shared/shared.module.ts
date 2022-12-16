import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedTitleComponent } from './components/shared-title/shared-title.component';
import { SplitPipe } from './pipes/split.pipe';
import { SharedButtonComponent } from './components/shared-button/shared-button.component';

@NgModule({
  declarations: [
    SharedTitleComponent,
    SplitPipe,
    SharedButtonComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    PrimeNgModule,
    SharedTitleComponent,
    SharedButtonComponent
  ]
})
export class SharedModule { }
