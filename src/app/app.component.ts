import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  image = "https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-Images.png";
  showLoading$: Observable<boolean>;
}

