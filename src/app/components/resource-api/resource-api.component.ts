import { JsonPipe } from '@angular/common';
import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-resource-api',
  imports: [JsonPipe],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css'
})
export class ResourceApiComponent {

  userList = resource({
    loader:() => {
      // fetch is a javascript thing not an angular
      return fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json() as Promise<any[]> )
    }
  });

  reloadData() {
    this.userList.reload();
  }

}
