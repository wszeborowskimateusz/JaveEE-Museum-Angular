import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Exhibit} from '../../model/exhibit';
import {ExhibitService} from '../../service/exhibit-service';
import {ExhibitCondition} from '../../model/exhibit-condition.enum';

@Component({
  selector: 'app-exhibit-edit',
  templateUrl: './exhibit-edit.component.html'
})
export class ExhibitEditComponent implements OnInit {

  exhibit: Exhibit;

  availableConditions = ExhibitCondition;

  exhibitConditionKeys: string[];

  constructor(private exhibitService: ExhibitService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    if (!this.route.snapshot.paramMap.has('id')) {
      this.exhibit = new Exhibit();
    } else {
      const id = this.route.snapshot.paramMap.get('id');
      this.exhibitService.findExhibit(Number(id)).subscribe((exhibit) => this.exhibit = exhibit);
    }

    this.exhibitConditionKeys = Object.keys(this.availableConditions).filter(exhibitKey => !isNaN(Number(exhibitKey)));
  }

  save() {
    this.exhibitService.saveExhibit(this.exhibit).subscribe(() => this.router.navigateByUrl('/exhibits'));
  }
}
