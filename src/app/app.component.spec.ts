import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './interceptors/http-interceptor.service';
import { AuthGuard } from './guards/auth.service';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing'
import { HeaderComponent } from './elements/header/header.component';
import { SidebarComponent } from './elements/sidebar/sidebar.component';
import { UserService } from './services/user.service';
import { ApiService } from './services/api.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    
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
      
    }).compileComponents();
  }));
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  
});
