import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { API_VERSION, PUBLIC_KEY, BASE_URL } from '../../app/providers';

@Injectable()
export class MarvelAPIService {

  //private baseUrl: string = 'https://gateway.marvel.com';
  //private apiVersion: string = 'v1';
  //private publicKey: string = '805efad39ef74122cee0c2ad31e6f95b';

  constructor(private http: Http, 
              @Inject(BASE_URL) private baseUrl,
              @Inject(API_VERSION) private apiVersion,
              @Inject(PUBLIC_KEY) private publicKey) { }

  getCharacterById(characterId: string): Observable<any> {
    let result: any;
    let completeUrl: string = this.baseUrl + `/${this.apiVersion}/public`;
    if (characterId === '') { 
        characterId = '-1';
    }
    completeUrl += `/characters/${characterId}/`;
    this.addParamsToUrl(completeUrl);
    result = this.getCall(completeUrl);
    return result;
  }

  private addParamsToUrl(url: string, params: object = {}) {
    url += '?';
    Object.keys(params).forEach(key => {
        let value: string = params[key];
        url += `${key}=${value}&`;
    });
    url += `apiKey=${this.publicKey}`;
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
