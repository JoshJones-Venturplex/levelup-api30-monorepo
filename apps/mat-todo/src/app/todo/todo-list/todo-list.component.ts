import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'workspace-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todos: any[];
  @Output() todoSelected: EventEmitter<any> = new EventEmitter();
  @Output() reset: EventEmitter<any> = new EventEmitter();

  constructor() { }

  selectTodo(todo) {
    this.todoSelected.emit(todo);
  }
}
