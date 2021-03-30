import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from './Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public http: HttpClient) { }
  storeTask(task: any): void {
    this.http.post('http://localhost:3000/task', task)
    .subscribe(result => console.log(result), error => console.log(error));
  }
  // loadTasks(): Observable<Array<Tasks[]>> {
  //   return this.http.get<Array<Tasks[]>>('../assets/task.json');
  // }
  loadTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>('http://localhost:3000/task');
  }
}
