import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  image = "https://www.exctext.com/images/rick-and-morty-font.webp";
  showLoading: Observable<boolean>;

  constructor() { }

}

