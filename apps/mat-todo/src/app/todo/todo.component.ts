import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'workspace-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: any[];
  selectedTodo: any;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  reset() {
    this.selectedTodo = null;
  }

  getTodos() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  selectTodo(todo) {
    this.selectedTodo = todo;
  }

  saveTodo(todo) {
    todo.id ? this.updateTodo(todo) : this.createTodo(todo);
  }

  createTodo(todo) {
    this.todoService.createTodo(todo)
      .subscribe(res => {
        this.getTodos();
        this.reset();
      })
  }
  
  updateTodo(todo) {
    this.todoService.updateTodo(todo)
      .subscribe(res => {
        this.getTodos();
        this.reset();
      })
  }

  deleteTodo(todo) {
    this.todoService.deleteTodo(todo)
      .subscribe(res => {
        this.getTodos();
        this.reset();
      })
  }
}
