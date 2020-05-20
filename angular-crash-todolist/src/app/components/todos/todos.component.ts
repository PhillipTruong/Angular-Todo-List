import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor() { } // used to import services

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'First Todo',
        completed:false
      }
    ]
  }

}
