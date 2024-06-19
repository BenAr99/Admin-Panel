import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'reverse-place-admin-panel-web';
  constructor(private http: HttpClient) {
    // http
    //   .get('http://localhost:8080/maps/122bad95-61c5-4d6f-b6e9-4b92b7ca5d17')
    //   .subscribe((value) => {
    //     console.log(value);
    //   });
  }
}
