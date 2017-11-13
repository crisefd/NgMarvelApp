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
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss']
  })

  export class CharacterComponent implements OnInit{

    constructor(private marvelApiService: MarvelAPIService,
                private route: ActivatedRoute, 
                private router: Router){}

    ngOnInit(){
        this.route.params.subscribe(params => {
            let id = params.id;
            
        });
    }

  }