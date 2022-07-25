import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AModuleRoutingModule } from './a-module-routing.module';
import {AComponentComponent} from "../a-component.component";
import {KEK} from "../../token";


@NgModule({
  declarations: [AComponentComponent],
  imports: [
    CommonModule,
    AModuleRoutingModule
  ],
  exports: [AComponentComponent],
  providers: [{provide: KEK, useValue:'kekA'}],
})
export class AModuleModule { }
