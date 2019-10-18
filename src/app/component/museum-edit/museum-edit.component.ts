import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Museum} from '../../model/museum';
import {MuseumService} from '../../service/museum-service';
import {Exhibit} from '../../model/exhibit';
import {Curator} from '../../model/curator';
import {ExhibitService} from '../../service/exhibit-service';
import {CuratorService} from '../../service/curator-service';

@Component({
  selector: 'app-museum-edit',
  templateUrl: './museum-edit.component.html',
  styleUrls: ['./museum-edit.component.css']
})
export class MuseumEditComponent implements OnInit {

  museum: Museum;

  availableExhibits: Exhibit[];

  availableCurators: Curator[];

  constructor(private museumService: MuseumService,
              private exhibitService: ExhibitService,
              private curatorService: CuratorService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    if (!this.route.snapshot.paramMap.has('id')) {
      this.museum = new Museum();
      this.getAvailableExhibitsAndCurators();
    } else {
      const id = this.route.snapshot.paramMap.get('id');
      this.museumService.findMuseum(Number(id)).subscribe((museum) => {
        this.museum = museum;
        this.getAvailableExhibitsAndCuratorsForMuseum(museum.id);
      });
    }
  }

  private getAvailableExhibitsAndCuratorsForMuseum(museumId: number) {
    this.museumService.findAllAvailableCuratorsForMuseum(museumId)
      .subscribe((availableCurators) => this.availableCurators = availableCurators);
    this.museumService.findAllAvailableExhibitsForMuseum(museumId)
      .subscribe((availableExhibits) => this.availableExhibits = availableExhibits);
  }

  private getAvailableExhibitsAndCurators() {
    this.curatorService.findAllAvailableCurators()
      .subscribe((availableCurators) => this.availableCurators = availableCurators);
    this.exhibitService.findAllAvailableExhibits()
      .subscribe((availableExhibits) => this.availableExhibits = availableExhibits);
  }

  save() {
    this.museumService.saveMuseum(this.museum).subscribe(() => this.router.navigateByUrl('/museums'));
  }

  compareExhibits(exhibit1: Exhibit, exhibit2: Exhibit): boolean {
    return exhibit1 && exhibit2 ? exhibit1.id === exhibit2.id : exhibit1 === exhibit2;
  }

  compareCurators(curator1: Curator, curator2: Curator): boolean {
    return curator1 && curator2 ? curator1.id === curator2.id : curator1 === curator2;
  }
}
