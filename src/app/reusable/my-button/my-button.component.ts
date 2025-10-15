import { Component, ElementRef, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {

  @Input() user! : { name: string; age: number};

  @ContentChild('btnText') btnTxtSpan!: ElementRef;


}
