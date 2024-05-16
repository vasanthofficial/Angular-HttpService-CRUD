import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators';

@Injectable()
export class HttpServicetsService {
  constructor(private http: HttpClient) {}

  results = [];

  onSubmit(data) {
    this.http
      .post(
        'https://angularbackend-8ae3d-default-rtdb.firebaseio.com/post.json',
        data
      )
      .subscribe((value) => console.log('Data stored ...' + { ...value }));
  }

  fetchData() {
    return this.http
      .get('https://angularbackend-8ae3d-default-rtdb.firebaseio.com/post.json')
      .pipe(
        map((value) => {
          for (const key in value) {
            if (value.hasOwnProperty(key)) {
              this.results.push({ ...value[key], id: key });
            }
          }
          return this.results;
        })
      );
  }

  deleteItems() {
    this.http
      .delete(
        'https://angularbackend-8ae3d-default-rtdb.firebaseio.com/post.json'
      )
      .subscribe((value) => console.log('Deleted successfully...' + value));
  }
}
