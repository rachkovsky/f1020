import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnChanges {
  @Input() items: any[];

  constructor() { }

  ngOnChanges(changes) {
    console.log(changes);
  }

  ngOnInit(): void {

  }

}
