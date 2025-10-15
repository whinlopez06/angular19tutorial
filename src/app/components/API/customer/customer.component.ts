import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../service/customer.service';
import { ProgressBarComponent } from '../../../reusable/progress-bar/progress-bar.component';
import { TabsComponent } from '../../../reusable/tabs/tabs.component';

@Component({
  selector: 'app-customer',
  imports: [FormsModule, ProgressBarComponent, TabsComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {


  customerTabs: string[] = ["Basic Info", "Plan Info", "Payments"];

  customerObject: any = {
    "customerId": 0,
    "customerName": "",
    "customerCity": "",
    "mobileNo": "",
    "email": ""
  }

  
  customerArray: any[] = [];

  constructor(private customerService: CustomerService) {
    this.getCustomers();
  }

  clearCustomerObject() {
    this.  customerObject = {
      "customerId": 0,
      "customerName": "",
      "customerCity": "",
      "mobileNo": "",
      "email": ""
    }
  }

  getCustomers() {
    this.customerService.loadCustomers().subscribe((response: any) => {
      this.customerArray = response.data;
    });

  }

  onSaveCustomer() {
    this.customerService.createNewCustomer(this.customerObject).subscribe((response: any) => {
      if (response.result) {
        this.clearCustomerObject();
        this.getCustomers();
        alert("New Customer added");
      } else {
        alert("Failed to add Customer");
        console.log(response.message);
      }
    });
  }

  onEditCustomer(customerObject: any) {
    this.customerObject = customerObject;
  }

}
