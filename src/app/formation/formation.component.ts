import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Formation } from './formation';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  formations$ !:Observable<Formation[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.formations$=this.dataService.getFormations();
  }

}