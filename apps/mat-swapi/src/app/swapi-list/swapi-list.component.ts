import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'workspace-swapi-list',
  templateUrl: './swapi-list.component.html',
  styleUrls: ['./swapi-list.component.scss']
})
export class SwapiListComponent implements OnInit {
  @Input() people: any[];
  @Output() pageChange: EventEmitter<any> = new EventEmitter;
  @Output() selectedPerson: EventEmitter<any> = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  changePage(pageChange) {
    this.pageChange.emit(pageChange);
  }

  selectPerson(person) {
    this.selectedPerson.emit(person);
  }
}
