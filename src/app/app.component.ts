import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { HttpServicetsService } from './http-servicets.service';
import { Post } from './postInterface';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private http: HttpClient,
    private httpService: HttpServicetsService
  ) {}

  post: Post;
  resuls: Post[];

  submitData() {
    this.post = {
      name: (<HTMLInputElement>document.getElementById('names')).value,
      company: (<HTMLInputElement>document.getElementById('company')).value,
    };
    this.httpService.onSubmit(this.post);
  }

  fetchData() {
    this.httpService.fetchData().subscribe((value) => {
      this.resuls = value;
    });
  }



  deletePost(){
    this.httpService.deleteItems();
  }
}
