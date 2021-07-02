import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DataServiceService } from '../../services/data-service/data-service.service';
import { Todo } from '../../interfaces/Todo';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  public item: Todo;

  constructor(
    private route: ActivatedRoute,
    private todoService: DataServiceService)
  { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.todoService.getTodoById(id).subscribe((res) => {
      this.item = res;
    })
  }

}
