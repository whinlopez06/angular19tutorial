import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-ul',
  imports: [],
  templateUrl: './my-ul.component.html',
  styleUrl: './my-ul.component.css'
})
export class MyUlComponent {

  @Input() itemList: string[] = [];

  constructor() {
  }

}
