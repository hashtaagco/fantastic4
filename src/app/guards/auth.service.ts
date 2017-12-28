import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { CanActivate } from '@angular/router/src/interfaces';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private loginService: UserService, private router: Router) { }

  canActivate(){
    if(!this.loginService.isLoggedin()){
      this.router.navigate(['/login']);
    }
    return this.loginService.isLoggedin();
  }
}
