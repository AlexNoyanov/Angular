import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AModuleRoutingModule } from './a-module-routing.module';
import {EComponentComponent} from "../e-component/e-component.component";
import {EServiceService} from "../e-component/e-service.service";


@NgModule({
  declarations: [EComponentComponent],
  imports: [
    CommonModule,
    AModuleRoutingModule
  ]
  providers: [{provide: EServiceService,useClass: EServiceService}]}],
})
export class AModuleModule { }
