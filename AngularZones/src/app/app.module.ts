import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZoneTestComponent } from './zone-test/zone-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ZoneTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
