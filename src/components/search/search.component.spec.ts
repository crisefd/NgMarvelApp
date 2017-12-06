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

let dummyResponse = require("../../testing/marvel-response-mock.json");

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