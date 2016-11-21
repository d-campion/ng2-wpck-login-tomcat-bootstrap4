import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AuthRoutingModule }   from './auth/auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AuthModalComponent } from './auth/auth-modal.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot(),

    AppRoutingModule,
    AuthRoutingModule
  ],
  declarations: [
    AppComponent,
    AuthComponent,
    AuthModalComponent
  ],
  entryComponents: [
    AuthModalComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
