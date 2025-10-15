import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass, CommonModule, FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {

  div1BgColor: string = "bg-success";
  div2BgColor: string = "bg-info";
  isChecked: boolean = false;
  div3ClassName: string = "";

  addDiv1Color(className: string) {
    this.div1BgColor = className;
  }


  onCheck() {
    
    // if (this.isChecked) {
    //   this.div2BgColor = "bg-warning";
    // } else {
    //   this.div2BgColor = "bg-info";
    // }

    this.div3ClassName = this.div2BgColor;
  }

}
