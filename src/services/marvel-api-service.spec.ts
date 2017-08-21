import { MarvelAPIService } from './marvel-api.service';
import { TestBed, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { BASE_URL, PUBLIC_KEY, API_VERSION } from '../app/providers';

describe('Testing MarvelAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
                  { provide: BASE_URL, useValue: 'https://gateway.marvel.com'},
                  { provide: API_VERSION, useValue: 'v1'},
                  { provide: PUBLIC_KEY, useValue: '805efad39ef74122cee0c2ad31e6f95b'},
                  { provide: XHRBackend, useClass: MockBackend },
                  MarvelAPIService
              ],
    });
  });
  
  describe('get character with empty id', () => {
      it('should return error code 404 ', () => {
          inject([MarvelAPIService, XHRBackend], (MarvelAPIService, mockBackend) => {
            const mockResponse = {
                data : [
                    {code: 404, status:"We couldn't find that character"}
                ]
            };
            mockBackend.connections.subscribe((connection) => {
              connection.mockRespond(new Response(new ResponseOptions({
                body: JSON.stringify(mockResponse)
              })));
            });
            MarvelAPIService.getCharacterById('').subscribe( character => {
                expect(character.data.code).toBe(400);
            });  
          })
      });
  });
});
