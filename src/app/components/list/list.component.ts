import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DataServiceService } from '../../services/data-service/data-service.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() items: any[];

  todos: Observable<any> = this.todoService.getTodos();
  showList = true;

  public title = 'Some text';

  constructor(private todoService: DataServiceService) { }

  ngOnInit() {
    //
  }

}
