import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class freeApiService {
  // create an instance of httpclient
  constructor(private httpclient: HttpClient) {}
  // return the instance of httpclient
  getcomments(): Observable<any> {
    return this.httpclient.get('https://jsonplaceholder.typicode.com/todos');
  }
}
