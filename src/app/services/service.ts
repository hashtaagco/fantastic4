import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';

export class Service{
    token : String = '';
    constructor(){
    }

    /**
     * @returns {string} Complete url path with respective enviorment's host
     * @param path Url path to concat with api host
     * @description Dont mess your api calls with + i.e. concatination
     */
    url(path:string){
        return environment.end_point + path;
    }

    /**
     * @returns {string} Get current jwt token
     */
    jwt(){
        this.token = sessionStorage.getItem('token');
        return this.token;
    }

    /**
     * @returns {RequestOptions} Get http request headers
     */
    headers(){
        let headers = new Headers({ 'Authorization': this.token });
        return new RequestOptions({ headers: headers });
    }

    /**
     * @returns {Object} Get http request headers
     */
    public static requestHeaders(){
        return { 
            'Authorization':  'JWT '+sessionStorage.getItem('token')
        };
    }

    /**
     * @description Set user auth
     * @param token JWT Auth token
     * @param user User info
     * @returns {void}
     */
    protected authSet(token:string, user:any){
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('user', JSON.stringify(user));
    }

    /**
     * @returns {token : string, user : any} Get user JWT token and info
     */
    protected authGet(){
        return {
            token : sessionStorage.getItem('token'),
            user : JSON.parse(sessionStorage.getItem('user')),
        };
    }
}