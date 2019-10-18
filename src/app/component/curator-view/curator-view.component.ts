import {Component, OnInit} from '@angular/core';
import {Curator} from '../../model/curator';
import {CuratorService} from '../../service/curator-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-curator-view',
  templateUrl: './curator-view.component.html',
  styleUrls: ['./curator-view.component.css']
})
export class CuratorViewComponent implements OnInit {

  curator: Curator;

  constructor(private curatorService: CuratorService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.curatorService.findCurator(Number(id)).subscribe(curator => this.curator = curator);
  }

}
