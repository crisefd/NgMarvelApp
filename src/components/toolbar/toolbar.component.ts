import {
    OnInit,
    OnDestroy,
    OnChanges,
    Input,
    Component
  } from '@angular/core';
  
  import { Router, ActivatedRoute } from '@angular/router';
  
  @Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
  })
  export class ToolbarComponent {
    constructor(private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
    }

    /**
    * Redirect to the home
    */
    goHome() {
        this.router.navigate(['']);
    }
  }  