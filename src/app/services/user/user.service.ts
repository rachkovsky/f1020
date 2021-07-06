import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(JSON.parse(localStorage.getItem('loggedIn')) || false);


  getUserStatus() {
    return this.loggedIn$.asObservable();
  }

  loginUser() {
    localStorage.setItem('loggedIn', 'true');
    this.loggedIn$.next(true);
  }

  logoutUser() {
    localStorage.removeItem('loggedIn');
    this.loggedIn$.next(false);
  }

  constructor() { }
}
