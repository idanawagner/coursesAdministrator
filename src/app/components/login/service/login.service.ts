import { Injectable } from '@angular/core';
import { SessionService } from 'src/app/core/services/session.service';
import { Session } from 'src/app/shared/models/session';
import { User } from 'src/app/shared/models/user';

@Injectable()
export class LoginService {
  constructor(
    private sessionService: SessionService
  ){ }

  login(user:User){
    let session: Session = {
      activeSession: true,
      activeUser: user
    };
   this.sessionService.createSession(session)
  }
}
