import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { FormationComponent } from './formation.component';
import { DataService } from '../data.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FormationComponent
  ],
  providers:[DataService],
  imports: [
    CommonModule,
    FormationRoutingModule,
    SharedModule
  ]
})
export class FormationModule { }
