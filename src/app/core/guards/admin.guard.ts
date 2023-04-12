import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Session } from 'src/app/shared/models/session';
import { LoginState } from 'src/app/components/login/login.state/login-state.reducer';
import { Store } from '@ngrx/store';
import { SelectSessionState } from 'src/app/components/login/login.state/login-state.selectors';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private loginStore: Store<LoginState>,
    private router: Router
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginStore.select(SelectSessionState).pipe(
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
