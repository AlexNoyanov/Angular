import {InjectionToken, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AComponentComponent } from './a-component/a-component.component';
import { BComponentComponent } from './b-component/b-component.component';

import  { ReflectiveInjector} from "@angular/core";
import {UserService} from "./user.service";
import { CComponentComponent } from './c-component/c-component.component';
import { DComponentComponent } from './d-component/d-component.component';
import {KEK} from "./token";
import {AModuleModule} from "./a-component/a-module/a-module.module";

const injector: Injector = ReflectiveInjector.resolveAndCreate([{provide:UserService,useClass: UserService},])

// Injectors : ReflectiveInjector или StaticInjector

const userService = injector.get(UserService)
const API_URL  = new InjectionToken<string>('API_URL')
const TOKEN = "SOME SECRET TOKEN"

@NgModule({
  declarations: [
    AppComponent,
    BComponentComponent,
    CComponentComponent,
    DComponentComponent,
  ],
  imports: [
    BrowserModule,
    AModuleModule,
  ],
  providers:
    [{provide:UserService,useClass: UserService},
    {provide: API_URL, useValue:TOKEN}, {provide: KEK, useValue:'kek'},
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
