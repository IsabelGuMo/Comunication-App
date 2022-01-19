import { Component } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent {
  public inputText: string = '';
  public sonMessage: string = '';
  

  public keyUp(letra: string): void {
    this.inputText = letra;
  }
  public setMessage(message: string): void {
    this.sonMessage = message;
  }

}
