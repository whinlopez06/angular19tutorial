import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl: string = "/miniproxy/api/CarRentalApp/";  // proxy setup when site cannot be access
  tokenExpired$: Subject<boolean> = new Subject<boolean>();
  tokenReceived$: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {
    
   }

  loadCustomers() {
    return this.http.get(this.apiUrl + "GetCustomers");
  }

  createNewCustomer(object: any) {
    return this.http.post(this.apiUrl + "CreateNewCustomer", object);
  }

}
