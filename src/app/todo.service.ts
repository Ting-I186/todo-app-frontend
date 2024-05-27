import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  private readonly baseUrl: string = 'http://localhost:31597/todos';

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  addTodo(todo: Todo): Observable<Todo> {
    console.log(todo);
    return this.http.post<Todo>(this.baseUrl, todo);
  }

  markAsDone(todo: Todo): Observable<Todo> {
    console.log(`Marking as done: ${todo}`);
    return this.http.patch<Todo>(`${this.baseUrl}/${todo.id}`, todo);
  }

  removeTodo(todo: Todo): Observable<Todo> {
    console.log(`Removing: ${todo}`);
    return this.http.delete<Todo>(`${this.baseUrl}/${todo.id}`);
  }
}
