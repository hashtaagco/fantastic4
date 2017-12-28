import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutes } from './app.routes';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './elements/header/header.component';
import { SidebarComponent } from './elements/sidebar/sidebar.component';
import { ApiService } from './services/api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpInterceptorService } from './interceptors/http-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core/src/metadata/ng_module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent
  ],
  exports : [
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      AppRoutes.getRoutes(),
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    HttpClient,
    { provide : HTTP_INTERCEPTORS, useClass :  HttpInterceptorService, multi : true },
    ApiService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
