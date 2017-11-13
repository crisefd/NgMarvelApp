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
    
    private result: any;
    private profilePicture: string;

    constructor(private marvelApiService: MarvelAPIService,
                private route: ActivatedRoute, 
                private router: Router){}

    ngOnInit(){
        this.route.params.subscribe(params => {
            let id = params.id;
            this.marvelApiService.getCharacterById(id)
                                    .subscribe(
                                        response => {
                                            this.result = (response.code == 200)? response.data.results[0]: [];
                                            if ( "thumpnail" in this.result && this.result.thumpnail.length > 1  ) {
                                                //this.profilePicture = this.result.thumpnail;
                                                this.profilePicture = "../../assets/images/imagenotavailable.jpg";
                                            }
                                        }

                                    );
        });
    }

    getPicture(): string{
        if (this.profilePicture){
            return this.profilePicture
        }
        return "../../assets/images/imagenotavailable.jpg";
    }

    getName(): string {
        if (this.result){
            return this.result.name;
        }
        return '';
    }

  }