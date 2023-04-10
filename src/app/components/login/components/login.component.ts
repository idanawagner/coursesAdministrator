import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Session } from 'src/app/shared/models/session';
import { User } from 'src/app/shared/models/user';
import { loadLoginStates } from '../login.state/login-state.actions';
import { LoginState } from '../login.state/login-state.reducer';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  hide = true;
  subscription!: Subscription;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private loginStore: Store<LoginState>
  ) {}
  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  createForm() {
    let regexEmail: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    this.loginForm = new FormGroup({
      email: new FormControl(''), //, [Validators.required, Validators.pattern(regexEmail)]
      password: new FormControl(''), //, [Validators.required, Validators.minLength(8)]
      administrator: new FormControl(''),
    });
  }
  login() {
    let user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      administrator: this.loginForm.value.administrator,
    };

    this.subscription = this.loginService
      .login(user)
      .subscribe((session: Session) => {
        this.loginStore.dispatch(loadLoginStates({ session: session }));
        this.router.navigate(['home']);
      });
  }
}
