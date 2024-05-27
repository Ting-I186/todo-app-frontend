import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(
    private http: HttpClient
  ) {}

  private readonly baseUrl: string = 'http://localhost:31597/todos';

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, todo);
  }

  markAsDone(todo: Todo): Observable<String> {
    console.log("Marking as done: " + todo);
    const requestOptions: Object = {
      responseType: 'text'
    };
    return this.http.patch<String>(`${this.baseUrl}/${todo.id}`, todo, requestOptions);
  }

  removeTodo(todo: Todo): Observable<String> {
    console.log("Removing: " + todo);
    const requestOptions: Object = {
      responseType: 'text'
    };
    return this.http.delete<String>(`${this.baseUrl}/${todo.id}`, requestOptions);
  }
}
