import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Router }from '@angular/router'
import { AppRoutingModule,routing} from './Routing/app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './helpers';
import { Routes, RouterModule } from '@angular/router';
import { AlertComponent } from './directive/alert.component';
import {AuthGuard} from './auth.guard'
import { JwtInterceptor, ErrorInterceptor } from './helpers';

import {AlertService} from './alert.service';
import {AuthenticationService} from './authentication.service';
import {UserService} from './services/user.service';
import { MyMaterialModule } from  './material.module';



@NgModule({  
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
  MyMaterialModule,
    BrowserModule,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
        HttpClientModule,
        MyMaterialModule,
        Router,
        RouterModule.forRoot([
          { path: '', redirectTo: '/', pathMatch: 'full' },
          { path: 'registration', component: RegistrationComponent },
          { path: 'login', component: LoginComponent },
           
         
        ]),
        BrowserAnimationsModule,
     
      ],
        
  
  providers: [
    AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
  
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }



