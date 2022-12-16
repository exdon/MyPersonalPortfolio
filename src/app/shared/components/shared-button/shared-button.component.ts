import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.scss']
})
export class SharedButtonComponent {

  @Input() buttonLabel!: string;
  @Output() buttonClickEvent = new EventEmitter();


  emitClickEvent() {
    this.buttonClickEvent.emit();
  }

}
