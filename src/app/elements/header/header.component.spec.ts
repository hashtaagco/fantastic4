import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from '../../interceptors/http-interceptor.service';
import { AuthGuard } from '../../guards/auth.service';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '../../app.component';
import { RouterTestingModule } from '@angular/router/testing'

import { SidebarComponent } from '../../elements/sidebar/sidebar.component';
import { UserService } from '../../services/user.service';
import { ApiService } from '../../services/api.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
