import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private http: HttpClient) {}

  public url = environment.API_URL;
  public header = new HttpHeaders().set('Authorization', localStorage.getItem('authorization'));
  GET(subURL,param) {
    return this.http.get(this.url + subURL,
        {
            headers: this.header,
            params: param,
        }
    );
  }

  POST(subURL,payload,auth=false) {  
    let header = auth ? this.header: new HttpHeaders() ;
    return this.http.post(this.url+subURL, payload,{
        headers: header
    })  
  }  
  
  PUT(urlPath,payload){  
    return this.http.put(this.url + urlPath,payload, {
        headers: this.header
    })  
  }  
  
  DELETE(urlPath) {  
    return this.http.delete(this.url  + urlPath,{
        headers: this.header
    });  
  } 
}