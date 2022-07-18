import {InjectionToken, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AComponentComponent } from './a-component/a-component.component';
import { BComponentComponent } from './b-component/b-component.component';

import  { ReflectiveInjector} from "@angular/core";
import {UserService} from "./user.service";
import { CComponentComponent } from './c-component/c-component.component';
import { DComponentComponent } from './d-component/d-component.component';
import { EComponentComponent } from './a-component/e-component/e-component.component';
import { FComponentComponent } from './a-component/e-component/f-component/f-component.component';

const injector: Injector = ReflectiveInjector.resolveAndCreate([{provide:UserService,useClass: UserService},])

// Injectors : ReflectiveInjector или StaticInjector

const userService = injector.get(UserService)
const API_URL  = new InjectionToken<string>('API_URL')
const TOKEN = "SOME SECRET TOKEN"

@NgModule({
  declarations: [
    AppComponent,
    AComponentComponent,
    BComponentComponent,
    CComponentComponent,
    DComponentComponent,
    EComponentComponent,
    FComponentComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers:
    [{provide:UserService,useClass: UserService},
    {provide: API_URL, useValue:TOKEN}],
  bootstrap: [AppComponent]
})
export class AppModule { }
