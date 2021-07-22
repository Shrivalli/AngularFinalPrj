import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LaptopComponent,
    LaptopDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
