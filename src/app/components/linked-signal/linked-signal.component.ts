import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {

  firstName = signal("Erwin");
  lastName = signal("Lopez");
  user = signal({id: 111, name: 'Whin'});

  fullName = linkedSignal({
    source: this.firstName,
    computation: (newOptions, previous) => {
      debugger;
      return newOptions + " " + this.lastName()
    }
  });

  email = linkedSignal({
    source: this.user,
    computation: user => `${user.name+user.id}@gmail.com`,
    equal: (a:any, b:any) => a.id !== b.id
  });

  changeName() {
    debugger;
    this.firstName.set("Chase");
  }

  changeId() {
    console.log('name:...', this.user().name);

    this.user.set({id:123, name: this.user().name});
  }

}
