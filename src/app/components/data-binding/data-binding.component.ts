import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName: string = "Erwin";
  rollNo: number = 121;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceHolder: string = "Please Enter Full Name Here:";
  div1ClassName: string = "bg-primary";
  selectedCity: string = "";
  
  constructor(private router: Router) {
    console.log(this.firstName);
    this.isActive = false;
    console.log(this.isActive);
  }

  showWelcomeMessage() {
    alert("Welcome to Angular 19 Tutorials!");
  }

  onCityChanges(value: string) {
    console.log('City changed to: ' + value );
  }

  navigatetoAdmin() {
    this.router.navigateByUrl("/admin");
  }

}
