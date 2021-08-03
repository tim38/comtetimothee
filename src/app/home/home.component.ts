import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  generalInfo: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   this.dataService.getGeneralInfo().subscribe(g=>this.generalInfo=g);
  }
}
