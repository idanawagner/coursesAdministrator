import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor() {
    let regexEmail: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    let controlsForm: any = {
      email: new FormControl('', [Validators.required, Validators.pattern(regexEmail)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      rememberData: new FormControl(false, [])

    }
    this.loginForm = new FormGroup(controlsForm);
  }
  login() {
    console.log(this.loginForm);
  }
}

