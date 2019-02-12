import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl: String = 'https://level-up-api-vuhmzxgkoy.now.sh';

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<any>(`${this.baseUrl}/todos/`);
  }

  createTodo(todo) {
    return this.http.post<any>(`${this.baseUrl}/todos`, todo);
  }
  
  updateTodo(todo) {
    return this.http.patch<any>(`${this.baseUrl}/todos/${todo.id}`, todo);
  }

  deleteTodo(todo) {
    return this.http.delete<any>(`${this.baseUrl}/todos/${todo.id}`);
  }
}
