import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JAVASCRIPT } from './javascript';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }
  get(type: string): any {
    switch (type) {
      case 'javascript':
        return JAVASCRIPT;
    }
  }
  // tslint:disable-next-line:typedef
  getAll(){
    return [
      { id: 'javascript', name: 'JavaScript' }
    ];
  }
}
