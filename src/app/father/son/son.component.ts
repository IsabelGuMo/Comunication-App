import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent {
    @Input() public inputText: string='';

    @Output() public emitMessage = new EventEmitter<string>();

    public message: string = '';

    public sendMessage() {
      this.emitMessage.emit(this.message);
    }

}
