import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {

  div1Visible: boolean = true;
  isChecked: boolean = false;
  dayName: string = '';

  employeeArray: any[] = [
    {empId: 121, name: 'ANA', city: 'Quezon City', contactNo: '987654321'},
    {empId: 122, name: 'CHE', city: 'Cavite City', contactNo: '34567890'},
    {empId: 123, name: 'LIZ', city: 'Makati City', contactNo: '543213687'},
    {empId: 124, name: 'ZEL', city: 'Manila City', contactNo: '875620482'},
    {empId: 125, name: 'PAT', city: 'Malabon City', contactNo: '123453698'},
  ];

  cityList: string[] = [
    "Quezon City",
    "Antipolo City",
    "San Mateo Rizal",
    "Cainta Rizal",
    "Taguig City"
  ];


  hideShowDiv1(isShow: boolean) {
    this.div1Visible = isShow;
  }

}
