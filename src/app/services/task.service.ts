import { Injectable } from '@angular/core';
import { Task } from '../data/Task';
import{HttpClient,HttpHeaders} from'@angular/common/http';
import { Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = "http://localhost:5200/tasks";
  constructor(private http:HttpClient) { }

  getTask():Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(id:number) {
    const url: string = `${this.apiUrl}/${id}`;
    return this.http.delete<Task>(url);
  }

  updateRemainder(task: Task) {
    const url: string = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task,httpOptions);
  }

  addTask(task:Task) {
    return this.http.post<Task>(this.apiUrl, task,httpOptions);
  }
}
