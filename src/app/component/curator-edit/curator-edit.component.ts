import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {CuratorService} from '../../service/curator-service';
import {Curator} from '../../model/curator';

@Component({
  selector: 'app-curator-edit',
  templateUrl: './curator-edit.component.html'
})
export class CuratorEditComponent implements OnInit {

  curator: Curator;

  constructor(private curatorService: CuratorService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    if (!this.route.snapshot.paramMap.has('id')) {
      this.curator = new Curator();
    } else {
      const id = this.route.snapshot.paramMap.get('id');
      this.curatorService.findCurator(Number(id)).subscribe((curator) => this.curator = curator);
    }
  }

  save() {
    this.curatorService.saveCurator(this.curator).subscribe(() => this.router.navigateByUrl('/curators'));
  }

}
