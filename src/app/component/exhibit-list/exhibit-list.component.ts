import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Curator} from '../../model/curator';
import {CuratorService} from '../../service/curator-service';
import {ExhibitService} from '../../service/exhibit-service';
import {Exhibit} from '../../model/exhibit';

@Component({
  selector: 'app-exhibit-list',
  templateUrl: './exhibit-list.component.html',
  styleUrls: ['./exhibit-list.component.css']
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
