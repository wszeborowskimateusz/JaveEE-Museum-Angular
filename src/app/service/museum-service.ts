import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {Museum} from '../model/museum';
import {Curator} from '../model/curator';
import {Exhibit} from '../model/exhibit';

@Injectable()
export class MuseumService {
  constructor(private http: HttpClient) {
  }

  findAllMuseums(): Observable<Museum[]> {
    return this.http.get<Museum[]>('api/museums');
  }

  findAllAvailableCuratorsForMuseum(id: number): Observable<Curator[]> {
    return this.http.get<Curator[]>(`api/museums/${id}/available-curators`);
  }

  findAllAvailableExhibitsForMuseum(id: number): Observable<Exhibit[]> {
    return this.http.get<Exhibit[]>(`api/museums/${id}/available-exhibits`);
  }

  findMuseum(id: number): Observable<Museum> {
    return this.http.get<Museum>(`api/museums/${id}`);
  }

  removeMuseum(museum: Museum): Observable<any> {
    return this.http.delete(`api/museums/${museum.id}`);
  }

  saveMuseum(museum: Museum): Observable<any> {
    if (museum.id) {
      return this.http.put(`api/museums/${museum.id}`, museum);
    } else {
      return this.http.post('api/museums/', museum);
    }
  }
}
