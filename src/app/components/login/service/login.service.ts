import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SessionService } from 'src/app/core/services/session.service';
import { config } from 'src/app/environment/config';
import { Session } from 'src/app/shared/models/session';
import { User } from 'src/app/shared/models/user';

@Injectable()
export class LoginService {
  constructor(
    private sessionService: SessionService,
    private http: HttpClient
  ) {}

  login(user: User): Observable<Session> {
    return this.http.get<Array<User>>(`${config.urlLogin}/users`).pipe(
      map((users: Array<User>) => {
        let validateUser = users.find(
          (u: User) => u.email === user.email && u.password === user.password
        );

        if (validateUser) {
          const session: Session = {
            activeSession: true,
            activeUser: validateUser,
          };
          return session;
        } else {
          const session: Session = {
            activeSession: false,
          };
          return session;
        }
      })
    );
  }
}
