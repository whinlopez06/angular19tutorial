import { Component, resource, ElementRef, ViewChild, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressBarComponent } from '../../reusable/progress-bar/progress-bar.component';
import { JsonPipe } from '@angular/common';
import { rxResource } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../../service/customer.service';


@Component({
  selector: 'app-admin',
  imports: [RouterLink, ProgressBarComponent, JsonPipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private http: HttpClient, private customerService: CustomerService) {
    this.getUsers();
    this.customerService.tokenReceived$.subscribe((response: boolean) => {
      if(response) {
        this.getUsers();
      }
    });
  }

  getUsers() {
    //projectapi
    this.http.get("projectapi/api/UserApp/GetAllUsers").subscribe((response: any) => {
      console.log('response: ', response);
    });
  }

}
