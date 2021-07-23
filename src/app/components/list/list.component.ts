import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { DataServiceService } from '../../services/data-service/data-service.service';
import { Observable, Subscription } from 'rxjs';
import {Todo} from '../../interfaces/Todo';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime, filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // @Input() items: any[];

  todos: Observable<any> = this.todoService.getTodos();
  showList = true;
  items = [];
  filteredItems = [];
  emptySearchInput: boolean = true;

  public searchString =  new FormControl('');

  constructor(private todoService: DataServiceService) { }

  ngOnInit() {
    this.todos.subscribe((res: Array<any>) => {
      this.items = res;
    });

    this.searchString.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe((str) => {
      if (str.length > 0) {
        this.emptySearchInput = false;
        this.filteredItems = this.items.filter((todo: Todo) => {
          return todo.title.includes(str);
        });
        console.log('--- ', this.filteredItems);
      } else {
        this.emptySearchInput = true;
      }
    })
  }

  onSearch() {

  }

}
