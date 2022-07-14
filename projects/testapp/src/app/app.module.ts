import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SwitcherModule} from "switcher";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    SwitcherModule.forRoot({
      sliderChecked: 'green',
      sliderUnChecked: 'red',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
