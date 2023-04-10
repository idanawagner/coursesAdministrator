import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Session } from 'src/app/shared/models/session';
import { SessionService } from '../../services/session.service';
import { Store } from '@ngrx/store';
import { selectActiveSesion } from 'src/app/components/login/login.state/login-state.selectors';

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
    private loginStore: Store<Session>
  ){

  }
  ngOnInit(){
    this.activeSession$ = this.loginStore.select(selectActiveSesion);
  }
  returnHome(){
    this.router.navigate(['home'])
  }
  logout(){
    let sessionLogout: Session = {
      activeSession: false,
      activeUser: undefined
    }
    // this.sessionService.logoutService(sessionLogout);
    this.router.navigate(['login'])
  }

}
