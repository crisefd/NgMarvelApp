import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from '../components/search/search.component';
import { HomeComponent } from '../components/home/home.component';
import { CharacterComponent } from '../components/character/character.component';

export const ROUTES: Routes = [
    { path: '',  component: HomeComponent },
    { path: 'character/:id', component: CharacterComponent }
]