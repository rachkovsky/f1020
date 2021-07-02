import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../../interfaces/Todo';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getTodoById(id: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

  getTodos(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos`)

  }

}
