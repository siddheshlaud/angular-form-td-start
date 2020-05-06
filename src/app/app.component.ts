import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  @ViewChild("f", {static: true}) signupForm: NgForm;
  defaultSecret: string = "pet";
  answer: string = "Default Answer";
  genders: string[] = ['Male', 'Female'];
  isSubmitted: boolean = false;

  user = {
    username: '',
    email: '',
    question: '',
    answer: '',
    gender: ''
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSuggesterUsername() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //   username: suggestedName,
    //   email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'Male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });

  }

  onSubmit() {
    //console.log(this.signupForm);
    this.isSubmitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.question = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
  }
}
