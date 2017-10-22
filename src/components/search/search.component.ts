
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

  public results: Array<any>;
  public searchText: string;
  public active: boolean;
  public focus: boolean;
  @Input() preview: boolean;

  constructor(private marvelApiService: MarvelAPIService,
    private route: ActivatedRoute,
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
      //this.router.navigate(['/person/'+id]); 
  }

  goExpanded(){

  }

  doSearch() {
    if (this.searchText.length > 2) {
      this.marvelApiService.searchCharacter(this.searchText)
        .subscribe(response => {
            this.results = (response.code == 200)? response.data.results: [];
          // TODO: handle character results
        });
    } else {
        this.results = [];
    }
  }
}
