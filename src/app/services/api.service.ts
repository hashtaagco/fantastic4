/**
 * @description Pre-structured ApiService write all your api request here.
 */
import { Injectable } from '@angular/core';
import { Service } from './service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService extends Service{

  constructor(private http: HttpClient, private router:Router) { 
    super();
  }
  
  /**
   * @param credentials Credentials to login
   * @returns {Observable<any>} Api call will return an Observable<any> object which can be subscribed for http response. * 
   */
  login(credentials : { email : string, password : string }){
    return this.http.post(this.url('users/signin'), credentials);
  }

  /**
   * @returns {Observable<any>} Api call will return an Observable<any> object which can be subscribed for http response.
   */
  getUsers(){
    return this.http.get(this.url('users'));
  }
}
