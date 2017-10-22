import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { SearchComponent } from '../components/search/search.component';
import { HomeComponent } from '../components/home/home.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MarvelAPIService } from '../services/marvel-api.service';
import { BASE_URL, PUBLIC_KEY, API_VERSION } from './providers';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FooterComponent,
    HomeComponent,
    FooterComponent,
    ToolbarComponent
  ],
  imports: [
    MaterialModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
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
