import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {Curator} from '../model/curator';

@Injectable()
export class CuratorService {
  constructor(private http: HttpClient) {
  }

  findAllCurators(): Observable<Curator[]> {
    return this.http.get<Curator[]>('api/curators');
  }

  findAllAvailableCurators(): Observable<Curator[]> {
    return this.http.get<Curator[]>('api/curators?only-available=true');
  }

  findCurator(id: number): Observable<Curator> {
    return this.http.get<Curator>(`api/curators/${id}`);
  }

  removeCurator(curator: Curator): Observable<any> {
    return this.http.delete(`api/curators/${curator.id}`);
  }

  saveCurator(curator: Curator): Observable<any> {
    if (curator.id) {
      return this.http.put(`api/curators/${curator.id}`, curator);
    } else {
      return this.http.post('api/curators/', curator);
    }
  }
}
