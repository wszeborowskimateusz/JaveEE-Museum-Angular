import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Museum} from '../../model/museum';
import {MuseumService} from '../../service/museum-service';

@Component({
  selector: 'app-museum-list',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})
export class MuseumListComponent implements OnInit {

  museums: Observable<Museum[]>;

  constructor(private museumService: MuseumService) {
  }

  ngOnInit() {
    this.museums = this.museumService.findAllMuseums();
  }

  removeMuseum(museum: Museum) {
    this.museumService.removeMuseum(museum).subscribe(() => this.ngOnInit());
  }

}
