import { Component } from '@angular/core';
import { MarvelAPIService } from './services/marvel-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarvelAPIService]
})
export class AppComponent {
  title = 'app';
  constructor(private marvelApiService: MarvelAPIService){
  }
}
