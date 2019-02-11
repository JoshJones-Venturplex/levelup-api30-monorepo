import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'workspace-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.scss']
})
export class InstrumentListComponent implements OnInit {
  @Input() instruments: any[];
  @Output() instrumentSelected: EventEmitter<any> = new EventEmitter();
  @Output() reset: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selectInstrument(instrument) {
    this.instrumentSelected.emit(instrument);
  }
}
