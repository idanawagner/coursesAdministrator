import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Session } from 'src/app/shared/models/session';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private sessionService: SessionService,
    private router: Router
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.sessionService.getSession().pipe(
      map((session: Session) => {
        if(session.activeUser?.administrator){
          return true;
        }else{
          alert('no es admin');
          this.router.navigate(['home']);
          return false
        }
      })
    );
  }

}
