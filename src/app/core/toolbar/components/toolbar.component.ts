import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Session } from 'src/app/shared/models/session';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  session$!: Observable<Session>
  constructor(
    private router: Router,
    private sessionService: SessionService
  ){

  }
  ngOnInit(){
    this.session$ = this.sessionService.getSession()
  }
  returnHome(){
    this.router.navigate(['home'])
  }
  logout(){
    let sessionLogout: Session = {
      activeSession: false,
      activeUser: undefined
    }
    this.sessionService.logoutService(sessionLogout);
    this.router.navigate(['login'])
  }

}
