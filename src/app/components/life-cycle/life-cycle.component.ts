import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, inject, Inject, OnDestroy, OnInit } from '@angular/core';
import { ShowLessMoreComponent } from "../../reusable/show-less-more/show-less-more.component";
import { TabsComponent } from '../../reusable/tabs/tabs.component';
import { MyUlComponent } from '../../reusable/my-ul/my-ul.component';
import { MyCardComponent } from '../../reusable/my-card/my-card.component';
import { MyButtonComponent } from "../../reusable/my-button/my-button.component";
import { MyTableComponent } from "../../reusable/my-table/my-table.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-life-cycle',
  imports: [ShowLessMoreComponent, TabsComponent, MyUlComponent, MyCardComponent, MyButtonComponent, MyTableComponent],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit,AfterViewInit,AfterViewChecked,AfterContentInit,
AfterContentChecked,OnDestroy {

  http = inject(HttpClient);

  sampletext: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae";

  cityList: string [] = ["Manila City", "Quezon City", "Caloocan City", "Antiplo City","Valenzuela City", "Mandaluyong City"];
  sampleCardTitle: string = "Test Card";

  // hard coded value
  // tableHeader: string[] = ['name', 'city', 'email', 'mobile'];
  // tableBody: any[] = [
  //   ['WhinLods', 'Quezon City', 'whinlods@gmail.com', '9195672231'],
  //   ['Caylo', 'Antipolo City', 'caylo@gmail.com', '0978729321'],
  //   ['Sebastial dasco', 'Pasig City', 'sebchase@gmail.com', '2345657678'],
  //   ['Eliamboi', 'Caloocan City', 'Eliam@gmail.com', '343567668'],
  // ];

  tableHeader: string[] = ['name', 'city', 'email', 'phone'];
  userList: any[] = [];

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    // api call function
    // this.userList = this.getUser();
    this.getUser();
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: ', performance.now());
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log('userList: ', this.userList);
    // viewchild, getting reference of third party library
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngOnDestroy(): void {
    alert("You are leaving page");
    console.log('ngOnDestroy');
  }

  getUser(): any {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((response: any) => {
      this.userList = response;
      console.log("userList: ", this.userList[0])
    },(error: any) => {

    });
  }

}
