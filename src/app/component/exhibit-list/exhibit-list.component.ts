import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';

import {ExhibitService} from '../../service/exhibit-service';
import {Exhibit} from '../../model/exhibit';

@Component({
  selector: 'app-exhibit-list',
  templateUrl: './exhibit-list.component.html'
})
export class ExhibitListComponent implements OnInit {

  exhibits: Observable<Exhibit[]>;

  constructor(private exhibitService: ExhibitService) {
  }

  ngOnInit() {
    this.exhibits = this.exhibitService.findAllExhibits();
  }

  removeExhibit(exhibit: Exhibit) {
    this.exhibitService.removeExhibit(exhibit).subscribe(() => this.ngOnInit());
  }

}
