import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Session } from 'src/app/shared/models/session';
import { SessionService } from '../../services/session.service';
import { Store } from '@ngrx/store';
import { SelectActiveSession } from 'src/app/components/login/login.state/login-state.selectors';
import { logoutLoginStates } from 'src/app/components/login/login.state/login-state.actions';
import { LoginState } from 'src/app/components/login/login.state/login-state.reducer';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  activeSession$!: Observable<Boolean>
  constructor(
    private router: Router,
    private sessionService: SessionService,
    private loginStore: Store<LoginState>
  ){

  }
  ngOnInit(){
    this.activeSession$ = this.loginStore.select(SelectActiveSession);
  }
  returnHome(){
    this.router.navigate(['home'])
  }
  logout(){
    let sessionLogout: Session = {
      activeSession: false,
      activeUser: undefined
    }
    this.loginStore.dispatch(logoutLoginStates({session: sessionLogout}));
    this.router.navigate(['home'])
  }
}
