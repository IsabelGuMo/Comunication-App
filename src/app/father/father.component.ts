import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent {
  public inputText: string = '';
  

  constructor() { }

  ngOnInit(): void {
  }

  public keyUp(letra: string): void {
    this.inputText = letra;
  }

}
