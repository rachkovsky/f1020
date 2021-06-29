import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient) { }

  title: string = 'angular-f1020';
  amount = 5;
  public arr = [];



  getTitle(str: string): string {
    return str;
  }

}
