import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'workspace-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnChanges {
  @Input() selectedTodo;
  @Output() saved: EventEmitter<any> = new EventEmitter();
  @Output() canceled: EventEmitter<any> = new EventEmitter();
  @Output() deleted: EventEmitter<any> = new EventEmitter();

  todoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.todoForm = this.formBuilder.group({
      date: [this.selectedTodo ? this.selectedTodo.date : ''],
      important: [this.selectedTodo ? this.selectedTodo.important : false],
      title: [this.selectedTodo ? this.selectedTodo.title : ''],
      description: [this.selectedTodo ? this.selectedTodo.description : '']
    });
  }

  saveTodo() {
    this.saved.emit({
      ...this.todoForm.value,
      id: this.selectedTodo ? this.selectedTodo.id : null
    });
  }
}
