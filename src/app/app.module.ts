import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MarvelAPIService } from '../app/services/marvel-api.service';
import { BASE_URL, PUBLIC_KEY, API_VERSION } from './providers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [
              { provide: BASE_URL, useValue: 'https://gateway.marvel.com'},
              { provide: API_VERSION, useValue: 'v1'},
              { provide: PUBLIC_KEY, useValue: '805efad39ef74122cee0c2ad31e6f95b'},
              MarvelAPIService
          ],
  bootstrap: [AppComponent]
})
export class AppModule { }
