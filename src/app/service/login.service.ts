import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = "projectapi/api/UserApp/";
  //apiUrl: string = "/miniproxy/api/CarRentalApp/";

  constructor(private http: HttpClient) { }

  login(loginObj: any) {
    return this.http.post(this.apiUrl + 'login', loginObj);
  }

}
