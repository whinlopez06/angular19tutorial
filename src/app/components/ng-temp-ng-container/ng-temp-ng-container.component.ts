import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-temp-ng-container',
  imports: [NgFor, NgIf, NgTemplateOutlet],
  templateUrl: './ng-temp-ng-container.component.html',
  styleUrl: './ng-temp-ng-container.component.css'
})
export class NgTempNgContainerComponent {

  employeeArray: any[] = [
    {empId: 121, isActive: true, name: 'ANA', city: 'Quezon city', contactNo: '9989123', attendance: 40},
    {empId: 122, isActive: false, name: 'BEA', city: 'Marikina city', contactNo: '345264', attendance: 50},
    {empId: 125, isActive: true, name: '', city: '', contactNo: '80493659', attendance: 20},
    {empId: 123, isActive: false, name: 'TRIX', city: 'Fairview', contactNo: '788946', attendance: 10},
    {empId: 124, isActive: true, name: 'MARIA', city: 'Caloocan city', contactNo: '253371', attendance: 100},
    {empId: 125, isActive: true, name: null, city: 'Manila city', contactNo: '6099624', attendance: 75}
  ];

  isLoader: boolean = true;

  constructor() {
    setTimeout(() => {
      this.isLoader = false;
    }, 3000);
  }

}
