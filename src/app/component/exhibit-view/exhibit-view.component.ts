import {Component, OnInit} from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import {Exhibit} from '../../model/exhibit';
import {ExhibitService} from '../../service/exhibit-service';

@Component({
  selector: 'app-exhibit-view',
  templateUrl: './exhibit-view.component.html'
})
export class ExhibitViewComponent implements OnInit {

  exhibit: Exhibit;

  constructor(private exhibitService: ExhibitService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.exhibitService.findExhibit(Number(id)).subscribe(exhibit => this.exhibit = exhibit);
  }

}
