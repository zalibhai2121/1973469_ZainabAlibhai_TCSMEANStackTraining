import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tasks } from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

  // displayColumns: string [] = ['id', 'name', 'task', 'deadline'];
  // public dataSource: {
  //   id: string,
  //   name: string,
  //   task: string,
  //   deadline: string,
  // }[] = task;
  task: Array<Tasks> = [];

  constructor(public tasks: TaskService) { }

  ngOnInit(): void {
    this.tasks.loadTasks().subscribe(result => this.task = result);
    console.log(this.task);
  }

}
