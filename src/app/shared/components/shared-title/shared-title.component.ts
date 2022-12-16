import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-shared-title',
  templateUrl: './shared-title.component.html',
  styleUrls: ['./shared-title.component.scss']
})
export class SharedTitleComponent {

  @Input() public title!: String;

}
