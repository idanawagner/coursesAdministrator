import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Session } from 'src/app/shared/models/session';
import { Store } from '@ngrx/store';
import { selectSessionState } from 'src/app/components/login/login.state/login-state.selectors';
import { LoginState } from 'src/app/components/login/login.state/login-state.reducer';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private router: Router,
    private loginStore: Store<LoginState>
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginStore.select(selectSessionState).pipe(
      map((session: Session) => {
        if(session.activeSession){
          return true;
        }else{
          this.router.navigate(['login'])
          return false
        }
      })
    );
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.loginStore.select(selectSessionState).pipe(
        map((session: Session) => {
          if(session.activeSession){
            return true;
          }else{
            this.router.navigate(['login'])
            return false
          }
        })
      );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.loginStore.select(selectSessionState).pipe(
        map((session: Session) => {
          if(session.activeSession){
            return true;
          }else{
            this.router.navigate(['login'])
            return false
          }
        })
      );
  }
}
