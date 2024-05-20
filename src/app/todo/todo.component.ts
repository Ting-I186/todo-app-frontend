import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  todo: Todo = {
    id: 1,
    task: 'Sleep',
    completed: false,
  };

  todos: Todo[] = [
    {
      id: 1,
      task: 'Sleep',
      completed: false,
    },
    {
      id: 2,
      task: 'Study for AWS',
      completed: false
    }
  ];
}
