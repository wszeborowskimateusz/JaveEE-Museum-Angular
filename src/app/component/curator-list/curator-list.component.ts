import {Component, OnInit} from '@angular/core';
import {CuratorService} from '../../service/curator-service';
import {Curator} from '../../model/curator';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-curator-list',
  templateUrl: './curator-list.component.html',
  styleUrls: ['./curator-list.component.css'],
})
export class CuratorListComponent implements OnInit {

  curators: Observable<Curator[]>;

  constructor(private curatorService: CuratorService) {
  }

  ngOnInit() {
    this.curators = this.curatorService.findAllCurators();
  }

  removeCurator(curator: Curator) {
    this.curatorService.removeCurator(curator).subscribe(() => this.ngOnInit());
  }

}
