import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
import { App2Component } from './app2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [App2Component]
})
export class AppModule { }
