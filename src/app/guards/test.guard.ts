import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user/user.service';
import { first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestGuard implements CanActivate {
  constructor(private user: UserService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.user.getUserStatus().pipe(
      first()
    );

  }

}
