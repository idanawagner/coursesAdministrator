import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginState } from 'src/app/components/login/login.state/login-state.reducer';
import { SelectActiveUser } from 'src/app/components/login/login.state/login-state.selectors';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeUser$!: Observable<User | undefined>;
  constructor(

    private loginStore: Store<LoginState>
  ){

  }
  ngOnInit(){
    this.activeUser$ = this.loginStore.select(SelectActiveUser);
  }
}
