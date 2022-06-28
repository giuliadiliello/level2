import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Quote } from '../model/quote.interface';
import { ISymbolLookup } from '../model/search.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly token = 'bu4f8kn48v6uehqi3cqg';

  constructor(private http: HttpClient) { }


  getQuote(symbol: string): Observable<Quote> {
    let params = new HttpParams();
    params = params.set('symbol', `${symbol}`);
    params = params.set('token', `${this.token}`);
    return this.http.get<Quote>(environment.api.getQuota, {params});
  }

  getSymbolLookup(symbol: string | null): Observable<ISymbolLookup> {
    let params = new HttpParams();
    if (symbol)
      params = params.set('q', `${symbol}`);
    params = params.set('token', `${this.token}`);
    return this.http.get<ISymbolLookup>(environment.api.search, {params});
  }
}
