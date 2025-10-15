import { HttpClient } from '@angular/common/http';
import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList: any[] = [];
  productList: any[] = [];

  constructor(private http: HttpClient) {

  }

  getUser() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((response: any) => {
      this.userList = response;
    });
  }

  getProducts() {
    this.http.get("https://fake-store-api.mock.beeceptor.com/api/products").subscribe((response: any) => {
      this.productList = response;
    });
  }

}
