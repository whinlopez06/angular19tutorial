import { NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-my-card',
  imports: [NgFor, NgTemplateOutlet],
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.css'
})
export class MyCardComponent {

  @Input() cardTitle: string = "";
  @Input() htmlTemplate!: TemplateRef<Element>;

  resultList: any[] = [];

  constructor() {

  }

}
