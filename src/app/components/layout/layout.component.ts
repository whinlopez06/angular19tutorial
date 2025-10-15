import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  router = inject(Router);
  customerService = inject(CustomerService);
  http = inject(HttpClient);

  constructor() {
    this.customerService.tokenExpired$.subscribe((response: boolean) => {
      if (response) {
        const loggedData = localStorage.getItem("angular19TokenData");
        if (loggedData) {
          const loggedUser = JSON.parse(loggedData);
          const obj = {
            "emailId": loggedUser.empId,
            "token": loggedUser.token,
            "refreshToken": loggedUser.refreshToken
          }
          this.http.post("projectapi/api/UserApp/refresh", obj).subscribe((response: any) => {
            localStorage.setItem("angular19User", response.data.userId);
            localStorage.setItem("angular19Token", response.data.token);
            localStorage.setItem("angular19TokenData", JSON.stringify(response.data));

            this.customerService.tokenReceived$.next(true);
          });
        }


      }
    });
  }

  onLogOut() {
    console.log('onLogOut!');
    localStorage.removeItem("angular19User");
    localStorage.removeItem("angular19Token");

    localStorage.removeItem("angular19TokenData");
    
    this.router.navigateByUrl("login");
  }

}
