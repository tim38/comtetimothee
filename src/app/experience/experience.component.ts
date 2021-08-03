import { Component, OnInit } from '@angular/core';
import { Observable, } from 'rxjs';
import { Experience } from './experience';
import { DataService } from '../data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences$!: Observable<Experience[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.experiences$ = this.dataService.getExperiences();
  }

}
