import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule, NgIf, FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {

  div1Visible: boolean = false;
  varText1: string = "";
  varText2: string = "";

  constructor() {

  }

  hideDiv1 () {
    this.div1Visible = false;
  }

  showDiv1() {
    this.div1Visible = true;
  }

}
