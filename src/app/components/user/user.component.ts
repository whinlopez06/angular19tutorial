import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  template: "<h2 class='text-danger'>User Page</h2><p>Hi, This is user component using template!</p>",
  styles: ['.text-danger {color:blue}']
})
export class UserComponent {

}
