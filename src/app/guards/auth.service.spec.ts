import { TestBed, inject, async } from '@angular/core/testing';

import { AuthGuard } from './auth.service';
import { UserService } from '../services/user.service';
import { Http } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from '../interceptors/http-interceptor.service';


import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '../app.component';
import { RouterTestingModule } from '@angular/router/testing'
import { HeaderComponent } from '../elements/header/header.component';
import { SidebarComponent } from '../elements/sidebar/sidebar.component';

import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({

      declarations: [
        
        AppComponent,
        HeaderComponent,
        SidebarComponent
      ],
      providers : [
        HttpClient,
        { provide : HTTP_INTERCEPTORS, useClass :  HttpInterceptorService, multi : true },
        ApiService,
        UserService,
        AuthGuard
      ],
      imports: [ 
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule,
        RouterTestingModule
      ],
    });
  });

  it('checks if a user is valid',

    // inject your guard service AND Router
    async(inject([AuthGuard, Router], (auth, router) => {

      // add a spy
      spyOn(router, 'navigate');

      expect(auth.canActivate()).toBeFalsy();
      expect(router.navigate).toHaveBeenCalled();
    })
  ));
});
