import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { NgFor } from '@angular/common';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  newTodo!: Todo;
  constructor(private todoService: TodoService) {
    todoService.getTodos()
      .subscribe(todos => {
        this.todos = todos;
      });
  }

  ngOnInit(): void {}

  addTodo(task: string): void {
    task = task.trim();
    if (!task) { return; }
    this.todoService.addTodo({task: task, completed: false} as Todo)
      .subscribe(todo => {
        this.todos.push(todo);
      });
  }
}
