import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Session } from 'src/app/shared/models/session';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  session$!: BehaviorSubject<Session>;

  constructor() {
    let session: Session = {
      activeSession: false,
    };
    this.session$ = new BehaviorSubject<Session>(session);
  }

  createSession(session: Session){
    this.session$.next(session);
  }
  getSession() {
    return this.session$.asObservable();
  }
  logoutService(session: Session){
    this.session$.next(session)
  }
}
