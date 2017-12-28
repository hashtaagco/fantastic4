/**
 * @class UserService
 * @description Pre-structured UserService to fetch all user and authentication information.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Service } from './service';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class UserService extends Service {
  user:any = {};
  
  constructor(private http: Http, private router:Router) {
    super();
  }

  /**
   * @returns {boolean} Check if the user is logged in.
   */
  isLoggedin(){
    let auth = this.authGet();
    if(auth.token && auth.token.length && auth.user && auth.user.id){
      this.user = auth.user;
      return true;
    }
    return false;
  }

  /**
   * @returns {void} Logout user clear session/localstorage and redirect user to login
   */
  logout(){
    this.authSet('',{});
    this.router.navigate(['login']);
  }

  /**
   * 
   * @param token JWT auth token
   * @param user User information
   * @returns {token : string, user: Object} Returns the token and user information
   */
  setLogin(token:string,user:any){
    this.authSet(token, user);
    return this.authGet();
  }

}