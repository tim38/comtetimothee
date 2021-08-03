import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from './experience/experience';
import { Formation } from './formation/formation';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { };

  public getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>('assets/experience.json');
  }

  public getFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>('assets/formation.json');
  }

  public getGeneralInfo(): Observable<any> {
    return this.http.get<any>('assets/general-info.json');
  }
}
