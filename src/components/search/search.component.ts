
import {
  OnInit,
  OnDestroy,
  OnChanges,
  Input,
  Component
} from '@angular/core';

import { MarvelAPIService } from '../../services/marvel-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  private results: Array<any>;
  private searchText: string;
  private active: boolean;
  private focus: boolean;
  @Input() preview: boolean;

  constructor(private marvelApiService: MarvelAPIService,
    private route: ActivatedRoute,
    private router: Router) {
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
      //this.router.navigate(['/person/'+id]); 
  }

  doSearch() {
    if (this.searchText.length > 2) {
      this.marvelApiService.searchCharacter(this.searchText)
        .subscribe(results => {
            this.results = results;
          // TODO: handle character results
        });
    } else {
        this.results = [];
    }
  }
}
