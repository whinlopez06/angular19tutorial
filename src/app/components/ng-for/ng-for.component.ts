import { DatePipe, JsonPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na.pipe';
import { ProgressBarComponent } from '../../reusable/progress-bar/progress-bar.component';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor,UpperCasePipe,LowerCasePipe,JsonPipe,DatePipe,NaPipe,ProgressBarComponent],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  courseName: string = "angular";

  currentDate: Date = new Date();

  studentObj : any = {
    name: 'Erwin Lopez',
    city: 'Quezon City',
    mobile: '11223334455667788'
  }

  cityList: string[] = ["Quezon city", "Fairview", "Caloocan city", "Manila city", "Marikina city"]
  // array object
  employeeArray: any[] = [
    {empId: 121, name: 'ANA', city: 'Quezon city', contactNo: '9989123', attendance: 40},
    {empId: 122, name: 'BEA', city: 'Marikina city', contactNo: '345264', attendance: 50},
    {empId: 125, name: '', city: '', contactNo: '80493659', attendance: 20},
    {empId: 123, name: 'TRIX', city: 'Fairview', contactNo: '788946', attendance: 10},
    {empId: 124, name: 'MARIA', city: 'Caloocan city', contactNo: '253371', attendance: 100},
    {empId: 125, name: 'EVA', city: 'Manila city', contactNo: '6099624', attendance: 75}
  ];
}
