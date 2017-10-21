import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { SearchComponent } from '../components/search/search.component';
import { HomeComponent } from '../components/home/home.component';
import { MarvelAPIService } from '../services/marvel-api.service';
import { BASE_URL, PUBLIC_KEY, API_VERSION } from './providers';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FooterComponent
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
  bootstrap: [ AppComponent ]
})
export class AppModule { }
