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
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  })
  export class HomeComponent {
  }  