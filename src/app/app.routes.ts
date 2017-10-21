import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from '../components/search/search.component';
import { HomeComponent } from '../components/home/home.component';

export const ROUTES: Routes = [
    { path: '',  component: HomeComponent },
    { path: '',  component: SearchComponent }
]