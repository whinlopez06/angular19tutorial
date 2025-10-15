import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    username: '',
    password: ''
  }

  apiLoginObj: any = {
    "EmailId": "",
    "Password": ""
  }

  router = inject(Router);

  constructor(private loginService: LoginService) {
  }

  onLogin() {
    debugger;
    // hardcode login
    // if (this.loginObj.username == "admin" && this.loginObj.password == "1122") {
    //   this.router.navigateByUrl('admin');
    // } else {
    //   alert("Wrong credentials");
    // }
    
    // api login
    this.loginService.login(this.apiLoginObj).subscribe((response: any) => {
      if (response.result) {
        localStorage.setItem("angular19User", response.data.userId);
        localStorage.setItem("angular19Token", response.data.token);
        localStorage.setItem("angular19TokenData", JSON.stringify(response.data));

        alert("Login success! Welcome: " + this.apiLoginObj.EmailId);
        this.router.navigateByUrl("admin");
      } else {
        alert("Invalid credentials");
      }
      console.log('response data: ',response.data);
    },
    (error: any) => {
      alert('error: '+ error.statusText);
    });

  }


}
