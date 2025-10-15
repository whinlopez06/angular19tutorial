import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  // reactive form,
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    userName: new FormControl(""),  //[Validators.email]
    city: new FormControl(""),
    state: new FormControl("Cubao"),
    zip: new FormControl(),
    isAggree: new FormControl(false)
  });

  constructor() {
    this.userForm.controls['state'].disable();
  }

  onValidateCity() {
    if(this.userForm.controls['city'].value) {
      this.userForm.controls['state'].enable();
    } else {
      this.userForm.controls['state'].disable();
    }
  }

  onUserSave() {
    const isValid = this.userForm.valid;
    const formValue = this.userForm.value;
    console.log('formValue:...', formValue);
  }

}
