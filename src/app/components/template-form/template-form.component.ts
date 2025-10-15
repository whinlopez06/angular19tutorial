import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, NgIf],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  userObject: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: 'Cubao',
    zipCode: '',
    isTermsAggree: false
  };


  onSave() {
    const formValues = this.userObject;
    console.log(formValues);
  }

}
