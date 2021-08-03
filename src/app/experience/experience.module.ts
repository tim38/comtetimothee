import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';
import { DataService } from '../data.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ExperienceComponent
  ],
  providers:[DataService],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    SharedModule
  ]
})
export class ExperienceModule { }
