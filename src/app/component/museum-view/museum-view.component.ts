import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MuseumService} from '../../service/museum-service';
import {Museum} from '../../model/museum';

@Component({
  selector: 'app-museum-view',
  templateUrl: './museum-view.component.html',
  styleUrls: ['./museum-view.component.css']
})
export class MuseumViewComponent implements OnInit {

  museum: Museum;

  constructor(private museumService: MuseumService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.museumService.findMuseum(Number(id)).subscribe(museum => this.museum = museum);
  }

}
