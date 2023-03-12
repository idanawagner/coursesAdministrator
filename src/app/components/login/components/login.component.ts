import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  hide = true;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
  }
  ngOnInit(){
    this.createForm();
  }

  createForm(){
    let regexEmail: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(regexEmail)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      administrator: new FormControl('')

    });

  }
  login() {
    let user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      administrator: this.loginForm.value.administrator
    };
    this.loginService.login(user);
    this.router.navigate(['home'])
  }
}

