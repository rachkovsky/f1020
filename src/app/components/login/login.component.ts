import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../../services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  constructor(private router: Router, private user: UserService ) { }

  ngOnInit(): void {

    this.loginForm.valueChanges.subscribe((val) => {
      console.log(this.loginForm.invalid);
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.user.loginUser();
      this.router.navigate(['/']);
    };
  }

}
