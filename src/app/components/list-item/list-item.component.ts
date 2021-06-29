import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../interfaces/Todo';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  public item: Todo;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;

    this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .subscribe((res: Todo) => {
      this.item = res;
      console.log(res);
    })
  }

}
