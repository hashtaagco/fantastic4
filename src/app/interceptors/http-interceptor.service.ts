import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { UserService } from '../services/user.service';
import { Service } from '../services/service';
import swal from 'sweetalert2';


@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private userService: UserService){

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    request = request.clone({
      setHeaders: Service.requestHeaders()
    });

    return next
      .handle(request)
      .do((ev: HttpEvent<any>) => {
        if (ev instanceof HttpResponse) {

        }
      })
      .catch(response => {
        if (response instanceof HttpErrorResponse) {
          if(response.error){
            if(response.error.code == 'E_UNAUTHORIZED'){
              swal(response.error.code,response.error.message,"error");
              // this.userService.logout();
            }
          }
        }
        return Observable.throw(response);
      });
  }
}
