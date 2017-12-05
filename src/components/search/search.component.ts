
import {
  OnInit,
  OnDestroy,
  OnChanges,
  Input,
  Component
} from '@angular/core';

import { MarvelAPIService } from '../../services/marvel-api.service';
import { Router  } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public results: any;
  public searchText: string;
  public active: boolean;
  public focus: boolean;
  @Input() preview: boolean;

  constructor(private marvelApiService: MarvelAPIService,
    private router: Router) {
    this.clear();
    this.router.events.subscribe(path => {
      this.clear();
      this.focus = false;
    });
  }
  
  setActiveState(active: boolean) {
      this.active = active;
  }

  putColor() {

  }

  removeColor() {

  }
  
  setFocusState(focus: boolean) {
      this.focus = focus;
  }

  clear() {
    this.active = false;
    this.searchText = '';
    this.results = [];
  }
  
  goCharacter(characterId: number) {
      this.router.navigate(['/character/' + characterId]); 
  }

  goExpanded(){

  }

  doSearch() {
    let searchField = document.querySelector('input');
    Observable.fromEvent(searchField, 'input')
      .pluck('target', 'value')
      .filter( (searchText: string) => { return searchText.length > 2} )
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap( (searchText: string) => {
         return this.marvelApiService.searchCharacter(searchText)
                  .pluck('data', 'results');
      }).subscribe(
        {
          next: results => { this.results = results },
          error: err => { this.results = [] },
          complete: () => {}
        }
      );
  }
}
