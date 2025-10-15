import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, inject, OnInit, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from '../../../reusable/tabs/tabs.component';
import { Car, IcarList } from '../../../model/car';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, TabsComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit,AfterViewInit{

  http = inject(HttpClient);

  firstName: string = "";
  currentTab: string = "Car List";

  carList: IcarList [] = [];

  @ViewChild('textCity') cityTextBox : ElementRef | undefined;
  @ViewChild(TabsComponent) myTabViewChild: TabsComponent | undefined;

  carObject: Car = new Car();

  constructor() {

  }

  readCity() {
    const city = this.cityTextBox?.nativeElement.value;
    if (this.cityTextBox) {
      this.cityTextBox.nativeElement.style.color = "red";
    }
    const val = this.myTabViewChild?.currentTab;
    console.log('current tab of viewChild tab: ', val);
  }

  // re initialize the object
  clearCarObject() {
    this.carObject = new Car();
  }

  ngOnInit(): void {
    this.getAllCars();
  }


  ngAfterViewInit(): void {
    console.log('after view checked: ', performance.now());
  }

  getAllCars() {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   })
    // }

    //this.http.get('/miniproxy/api/BigBasket/GetAllProducts');
    // this.http.get("/miniproxy/api/CarRentalApp/GetCars", {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // }).subscribe((response: any) => {
    //   this.carList = response.data;
    //   console.log('carList:...', this.carList);
    // });

    this.http.get("/miniproxy/api/CarRentalApp/GetCars").subscribe((response: any) => {
      this.carList = response.data;
    });


  }


  onSaveCar() {
    debugger;
    //this.http.post("/miniproxy/api/CarRentalApp/CreateNewCar", this.carObject)
    this.http.post("/miniproxy/api/CarRentalApp/CreateNewCar", this.carObject).subscribe((response: any) => {
      console.log('saveCar response:...', response);
      if (response.result) {
        alert("Car created successfully");
        this.getAllCars();
      } else {
        alert(response.message);
      }
      this.clearCarObject();
    });
  }

  onEditCar(carObject: any) {
    this.carObject = carObject; // pass to current object
  }

  onSaveEditCar() {
    this.http.put("/miniproxy/api/CarRentalApp/UpdateCar", this.carObject).subscribe((response: any) => {
      console.log('onSaveEditCar response:...', response);
      if (response.result) {
        alert("Car updated successfully");
      } else {
        alert(response.message);
      }
      this.clearCarObject();
    });
  }

  onDeletecar(carId: any) {

    const isDelete = confirm("Are you sure you want to delete?");
    if (isDelete == true) {
      // `${user.name+user.id}@gmail.com`
      this.http.delete("/miniproxy/api/CarRentalApp/DeleteCarbyCarId?carId="+carId).subscribe((response: any) => {
        console.log('onSaveEditCar response:...', response);
        if (response.result) {
          alert("Car deleted successfully");
        } else {
          alert(response.message);
        }
        this.getAllCars();
        this.clearCarObject();
      });
    }

  }

  onTabChange(tabName: string) {
    this.currentTab = tabName;
  }


}
