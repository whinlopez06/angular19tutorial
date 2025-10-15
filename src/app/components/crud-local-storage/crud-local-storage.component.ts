import { Component, OnInit } from '@angular/core';
import { User } from '../../model/crud';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-crud-local-storage',
  imports: [FormsModule, NgFor],
  templateUrl: './crud-local-storage.component.html',
  styleUrl: './crud-local-storage.component.css'
})
export class CrudLocalStorageComponent implements OnInit {

    isNewUser: boolean = false;
    userObject: User = new User();
    storageData: any;
    userList: User[] = [];
    localKey: string = "user";
    
    constructor() {
      this.getLocalStorageData();
    }

    ngOnInit(): void {
      this.onListUsers();
    }

    changeView() {
      this.isNewUser = !this.isNewUser;
      if (this.isNewUser) {
        this.userObject = new User();
      }
    }

    onSave() {
      this.userObject.userId = this.userList.length + 1;
      this.userList.push(this.userObject);

      this.setLocalStorageData();
      this.changeView();
    }
    
    onEdit(user: User) {
      this.changeView();
      this.userObject = user;
    }

    onUpdate() {
      // solution 1: using filter (shorter)
      // this.userList.filter((obj) => {
      //   if (obj.userId == this.userObject.userId) {
      //     obj = this.userObject;
      //   }
      // });

      //------------------------------------------------

      // solution 2: using find
      const record = this.userList.find(user=>user.userId == this.userObject.userId);
      if(record != undefined) {
        record.firstName = this.userObject.firstName;
        record.lastName = this.userObject.lastName;
        record.userName = this.userObject.userName;
        record.city = this.userObject.city;
        record.state = this.userObject.state;
        record.zip = this.userObject.zip;
        record.isAggree = this.userObject.isAggree;
      }

      this.setLocalStorageData();
      this.changeView();
    }

    onDelete(userId: any) {

      const allowDelete: boolean = confirm("Are you sure to delete?");
      if (allowDelete) {
        // solution 1: using filter
        //this.userList = this.userList.filter(user => user.userId != record.userId);
        this.userList = this.userList.filter(user => user.userId != userId);

        //------------------------------------------------

        // solution 2: using array index
        // const index = this.userList.findIndex(user => user.userId == record.userId);
        // this.userList.splice(index, 1);

        this.setLocalStorageData();

        alert("Record Deleted");
      }
    }

    onListUsers() {
      this.userObject = new User();
      this.getLocalStorageData();
    }
    
    getLocalStorageData() {
      this.storageData = localStorage.getItem(this.localKey);
      if (this.storageData != null) {
        this.userList = JSON.parse(this.storageData);
      }
    }
  
    setLocalStorageData() {
      localStorage.setItem(this.localKey, JSON.stringify(this.userList));
    }

}
