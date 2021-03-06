import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { API_VERSION, PUBLIC_KEY, BASE_URL } from '../app/providers';

@Injectable()
export class MarvelAPIService {

  constructor(private http: Http, 
              @Inject(BASE_URL) private baseUrl,
              @Inject(API_VERSION) private apiVersion,
              @Inject(PUBLIC_KEY) private publicKey) { }

  getCharacterById(characterId: string): Observable<any> {
    let response: any;
    let completeUrl: string = this.baseUrl + `/${this.apiVersion}/public`;
    if (characterId === '') { 
        characterId = '-1';
    }
    completeUrl += `/characters/${characterId}`;
    completeUrl = this.addParamsToUrl(completeUrl);
    response = this.getCall(completeUrl);
    return response;
  }
  
  getComicsByCharacterId(characterId: string): Observable<any> {
      let results: any;
      let completeUrl: string = this.baseUrl + `/${this.apiVersion}/public`;
      if (characterId === '') { 
          characterId = '-1';
      }
      completeUrl += `/characters/${characterId}/comics`;
      completeUrl = this.addParamsToUrl(completeUrl);
      results = this.getCall(completeUrl);
      return results;
  }
  
  searchCharacter(searchText: string, limit: number = 10): Observable<any>{
      let response: any;
      let completeUrl: string = this.baseUrl + `:443/${this.apiVersion}/public/characters`;
      let params = { nameStartsWith: searchText, orderBy: 'name', limit: limit };
      completeUrl = this.addParamsToUrl(completeUrl, params);
      response = this.getCall(completeUrl);
      return response;
  }

  private addParamsToUrl(url: string, params: object = {}) {
    url += '?';
    Object.keys(params).forEach(key => {
        let value: string = params[key];
        url += `${key}=${value}&`;
    });
    url += `apikey=${this.publicKey}`;
    return url;
  }

  private getCall(url: string): Observable<any> {
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(response: Response): Observable<any> {
    let content = response.json();
    return content || {};
  }

  // TODO: Improve handling of errors
  private handleError(error: any): Observable<any> {
    let errorMessage = (error.message) ? error.message :
      error.status ? `${error.status} - ${error._body}` : 'Server error';
    console.error(errorMessage); // log to console instead
    return Observable.throw(errorMessage);
  }
}
