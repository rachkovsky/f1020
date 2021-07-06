import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isLoggedIn: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    private user: UserService
    ) { }

  title: string = "angular-f1020angular-f1020angular-f1020angular-f1020angular-f1020angular-f1020angular-f1020angular-f1020angular-f1020angular-f1020angular-f1020angular-f1020angular-f1020angular-f1020angular-f1020angular-f1020angular-f1020angular-f1020angular-f1020angular-f1020angular-f1020angular-f1020";
  amount = 5;
  public arr = [];

  ngOnInit() {
    this.user.getUserStatus().subscribe(res => {
      this.isLoggedIn = res;
      if (res === false) {
        this.router.navigate(["/login"]);
      }
    })
  }

  logout() {
    this.user.logoutUser();
    this.router.navigate(['/login']);
  }

}
