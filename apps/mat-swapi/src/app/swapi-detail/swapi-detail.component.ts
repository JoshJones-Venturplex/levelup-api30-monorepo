import { Component, OnInit, Input } from '@angular/core';
import { SwapiService } from '../shared/swapi.service';

@Component({
  selector: 'workspace-swapi-detail',
  templateUrl: './swapi-detail.component.html',
  styleUrls: ['./swapi-detail.component.scss']
})
export class SwapiDetailComponent implements OnInit {
  @Input() person;
  @Input() films;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {

  }

  
}
