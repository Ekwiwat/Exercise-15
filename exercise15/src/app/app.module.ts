import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { NewCompComponent } from './new-comp/new-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    NewCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
