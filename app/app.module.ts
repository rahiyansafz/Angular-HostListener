import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ClickCatcher } from './click-catcher.directive';
import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ClickCatcher ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
