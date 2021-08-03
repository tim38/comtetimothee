import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DataService } from '../data.service';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  providers:[DataService],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbProgressbarModule,
    SharedModule
  ]
})
export class HomeModule { }
