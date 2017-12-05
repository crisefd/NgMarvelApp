import { HttpModule, Http, XHRBackend } from '@angular/http';
import { Component, Input,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ComponentFixture, TestBed, inject, async } from '@angular/core/testing';
import {SearchComponent} from './search.component';
import { MarvelAPIService } from '../../services/marvel-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {FooterComponent} from '../footer/footer.component';
import { BASE_URL, PUBLIC_KEY, API_VERSION} from '../../app/providers';
import { Router} from '@angular/router';


@Component({
    selector: 'test-search-component',
    template: '<app-search></app-search>',
})
class TestComponent {
    constructor(){}
}

let dummyResponse = {
    "code": 200,
    "data": {
      "offset": 0,
      "limit": 1,
      "total": 2,
      "count": 1,
      "results": [
        {
          "id": 1009491,
          "name": "Peter Parker",
          "description": "",
          "modified": "2011-09-08T16:58:21-0400",
          "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
            "extension": "jpg"
          },
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009491",
          "comics": {
            "available": 170,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009491/comics",
            "items": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/37895",
                "name": "Amazing Spider-Man (1999) #2"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/37896",
                "name": "Amazing Spider-Man (1999) #3"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/37901",
                "name": "Amazing Spider-Man (1999) #4"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/37899",
                "name": "Amazing Spider-Man (1999) #5"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/37902",
                "name": "Amazing Spider-Man (1999) #7"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/37903",
                "name": "Amazing Spider-Man (1999) #8"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/37904",
                "name": "Amazing Spider-Man (1999) #9"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/37988",
                "name": "Amazing Spider-Man (1999) #10"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/43455",
                "name": "Amazing Spider-Man (1999) #11"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/41920",
                "name": "Amazing Spider-Man (1999) #12"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/48428",
                "name": "Amazing Spider-Man (1999) #13"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/6642",
                "name": "Amazing Spider-Man (1963) #243"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/6643",
                "name": "Amazing Spider-Man (1963) #244"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/6644",
                "name": "Amazing Spider-Man (1963) #245"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/6648",
                "name": "Amazing Spider-Man (1963) #249"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/6650",
                "name": "Amazing Spider-Man (1963) #250"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/6651",
                "name": "Amazing Spider-Man (1963) #251"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/6652",
                "name": "Amazing Spider-Man (1963) #252"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/6653",
                "name": "Amazing Spider-Man (1963) #253"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/6654",
                "name": "Amazing Spider-Man (1963) #254"
              }
            ],
            "returned": 20
          },
          "series": {
            "available": 20,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009491/series",
            "items": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
                "name": "Amazing Spider-Man (1999 - 2013)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/1987",
                "name": "Amazing Spider-Man (1963 - 1998)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/318",
                "name": "Amazing Spider-Man Vol. 6 (2004)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/1291",
                "name": "Amazing Spider-Man Vol. 7: The Book of Ezekiel (2004)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/1292",
                "name": "Amazing Spider-Man Vol. 7: The Book of Ezekiel (2005)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/1283",
                "name": "Amazing Spider-Man Vol. 8: Sins Past (2005)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
                "name": "Avengers (1963 - 1996)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/23704",
                "name": "Daily Bugle (1996 - 1997)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/2271",
                "name": "Peter Parker, the Spectacular Spider-Man (1976 - 1998)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/2060",
                "name": "Peter Parker: Spider-Man (1999 - 2003)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/192",
                "name": "Spider-Man Legends Vol. 2: Todd Mcfarlane Book II (2003)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/66",
                "name": "Spider-Man Legends Vol. II: Todd Mcfarlane Book I (1999)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/285",
                "name": "Spider-Man Legends Vol. III: Todd Mcfarlane Book III (2004)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/1590",
                "name": "Spider-Man Vs. Silver Sable Vol. 1 (2006)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/1921",
                "name": "Spider-Man: Birth of Venom (2007)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/466",
                "name": "Ultimate Spider-Man (2000 - 2009)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/1221",
                "name": "Ultimate Spider-Man Vol. 11: Carnage (2004)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/1383",
                "name": "Ultimate Spider-Man Vol. 12: Superstars (2005)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/2692",
                "name": "Ultimate Spider-Man Vol. 17: Clone Saga (2007)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/2922",
                "name": "Ultimate Spider-Man Vol. 18: Ultimate Knights (2007)"
              }
            ],
            "returned": 20
          },
          "stories": {
            "available": 174,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009491/stories",
            "items": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1022",
                "name": "Amazing Spider-Man (1999) #502",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1137",
                "name": "Amazing Spider-Man (1999) #505",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1139",
                "name": "Amazing Spider-Man (1999) #506",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1141",
                "name": "Amazing Spider-Man (1999) #507",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1143",
                "name": "Amazing Spider-Man (1999) #510",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1147",
                "name": "Amazing Spider-Man (1999) #509",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1291",
                "name": "1 of 2 - Human Torch",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1293",
                "name": "2 of 2 - Human Torch",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1314",
                "name": "Ultimate Spider-Man (2000) #63",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1315",
                "name": "Interior #1315",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1325",
                "name": "Interior #1325",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1327",
                "name": "Interior #1327",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1329",
                "name": "SELF-CONTAINED STORY!  It’s the Breakfast Club redux as Peter, Mary Jane, Liz, Flash and Kong are busted and given detention. No",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1330",
                "name": "Ultimate Spider-Man (2000) #66",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1335",
                "name": "1 of 2 - Sorceror Supreme",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1399",
                "name": "5 of ? - The Clone Saga",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1401",
                "name": "6 of ? - The Clone Saga",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1403",
                "name": "7 of 8 - The Clone Saga",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1405",
                "name": "8 of 8 - The Clone Saga",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1663",
                "name": "Amazing Spider-Man (1999) #503",
                "type": "cover"
              }
            ],
            "returned": 20
          },
          "events": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009491/events",
            "items": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
                "name": "Acts of Vengeance!"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
                "name": "Inferno"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
                "name": "Onslaught"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
                "name": "Secret Wars"
              }
            ],
            "returned": 4
          },
          "urls": [
            {
              "type": "detail",
              "url": "http://marvel.com/characters/2770/peter_parker?utm_campaign=apiRef&utm_source=805efad39ef74122cee0c2ad31e6f95b"
            },
            {
              "type": "comiclink",
              "url": "http://marvel.com/comics/characters/1009491/peter_parker?utm_campaign=apiRef&utm_source=805efad39ef74122cee0c2ad31e6f95b"
            }
          ]
        }
      ]
    }
  };

class MyRouter{
    events = {
        subscribe: (f) => {}
    };
}

fdescribe('SearchComponent test', () => {
    fit('should create an instance', () => {
        TestBed.configureTestingModule({
            imports: [ HttpModule,
                BrowserModule,   
                FormsModule,
                BrowserAnimationsModule,
                MaterialModule],

            providers:[
                {provide: MarvelAPIService, useValue: {}}, 
                {provide: Router, useClass: MyRouter } 
               ],

             declarations: [TestComponent, 
                            SearchComponent, 
                            ToolbarComponent,
                            FooterComponent,
                          
                           ] });
        let fixture = TestBed.createComponent(TestComponent);
        let component = fixture.debugElement.children[0].componentInstance;

        expect( component ).toBeTruthy();
    });

    fit('spy example test', () => {
        TestBed.configureTestingModule({
            imports: [ HttpModule,
                BrowserModule,   
                FormsModule,
                BrowserAnimationsModule,
                MaterialModule],

            providers:[
                {provide: MarvelAPIService, useValue: 
                                    {searchCharacter: () => {
                                        return Observable.of({});

                                        }
                                    }}, 
                {provide: Router, useClass: MyRouter } 
               ],

             declarations: [TestComponent, 
                            SearchComponent, 
                            ToolbarComponent,
                            FooterComponent,
                          
                           ] });
        let fixture = TestBed.createComponent(TestComponent);
        let component = fixture.debugElement.children[0].componentInstance;
        let spy = spyOn( component, 'dummyAuxFunction' );
        component.dummyFunction();
        expect(component.dummyAuxFunction).toHaveBeenCalledWith(4);
        expect(component.dummyAuxFunction).toHaveBeenCalledTimes(1);
        
    });


    fit('should search', () => {
        TestBed.configureTestingModule({
            imports: [ HttpModule,
                BrowserModule,   
                FormsModule,
                BrowserAnimationsModule,
                MaterialModule],

            providers:[
                {provide: MarvelAPIService, useValue: 
                                    {searchCharacter: () => {
                                        return Observable.of(dummyResponse);

                                        }
                                    }}, 
                {provide: Router, useClass: MyRouter } 
               ],

             declarations: [TestComponent, 
                            SearchComponent, 
                            ToolbarComponent,
                            FooterComponent,
                          
                           ] });
        let fixture = TestBed.createComponent(TestComponent);
        let component = fixture.debugElement.children[0].componentInstance;
        let spy = spyOn( component, 'getEventObservable' )
                    .and.returnValue(Observable.of({target: {value:"Peter Parker"}}));
        component.doSearch();
        expect(component.results).toBe(dummyResponse.data.results);
       
        
    });
});