import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { UserComponent } from "./components/user/user.component";  // Add user component in the imports: []
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgFor, NgIf } from '@angular/common';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { AdminComponent } from './components/admin/admin.component';
import { NgClassComponent } from "./components/ng-class/ng-class.component";
import { NgStyleComponent } from "./components/ng-style/ng-style.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminComponent, UserComponent, DataBindingComponent, NgIfComponent, 
    NgForComponent, NgClassComponent, NgStyleComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19tutorial';
}
