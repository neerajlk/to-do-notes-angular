import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  public url = environment.API_URL;
  public header;
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders().set(
      'Authorization',
      localStorage.getItem('authorization')
    );
  }

  GET(subURL, param) {
    this.header = new HttpHeaders().set('Authorization', localStorage.getItem('authorization'));
    return this.http.get(this.url + subURL, {
      headers: this.header,
      params: param,
    });
  }

  POST(subURL, payload, auth = false) {
    this.header = new HttpHeaders().set('Authorization', localStorage.getItem('authorization'));
    let header = auth ? this.header : new HttpHeaders();
    return this.http.post(this.url + subURL, payload, {
      headers: header,
    });
  }

  PUT(urlPath, payload) {
    this.header = new HttpHeaders().set('Authorization', localStorage.getItem('authorization'));
    return this.http.put(this.url + urlPath, payload, {
      headers: this.header,
    });
  }

  DELETE(urlPath) {
    return this.http.delete(this.url + urlPath, {
      headers: this.header,
    });
  }
}
