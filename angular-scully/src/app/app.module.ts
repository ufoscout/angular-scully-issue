import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { UserService } from './user.service';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ScullyLibModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
