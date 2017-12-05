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
                {provide: Router, useValue: {} } 
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
});