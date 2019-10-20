import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {Exhibit} from '../model/exhibit';

@Injectable()
export class ExhibitService {
  constructor(private http: HttpClient) {
  }

  findAllExhibits(): Observable<Exhibit[]> {
    return this.http.get<Exhibit[]>('api/exhibits');
  }

  findAllAvailableExhibits(): Observable<Exhibit[]> {
    return this.http.get<Exhibit[]>('api/exhibits?only-available=true');
  }

  findExhibit(id: number): Observable<Exhibit> {
    return this.http.get<Exhibit>(`api/exhibits/${id}`);
  }

  removeExhibit(exhibit: Exhibit): Observable<any> {
    return this.http.delete(`api/exhibits/${exhibit.id}`);
  }

  saveExhibit(exhibit: Exhibit): Observable<any> {
    if (exhibit.id) {
      return this.http.put(`api/exhibits/${exhibit.id}`, exhibit);
    } else {
      return this.http.post('api/exhibits/', exhibit);
    }
  }
}
