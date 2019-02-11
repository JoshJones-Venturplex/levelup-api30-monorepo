import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../shared/instrument.service';

@Component({
  selector: 'workspace-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss']
})
export class InstrumentComponent implements OnInit {
  instruments: any[];
  selectedInstrument: any;

  constructor(private energyService: InstrumentService) { }

  ngOnInit() {
    this.getInstruments();
  }

  reset() {
    this.selectedInstrument = null;
  }

  getInstruments() {
    this.energyService.getInstruments()
      .subscribe(res => this.instruments = res);
  }

  selectInstrument(instrument) {
    this.selectedInstrument = instrument;
  }

  saveInstrument(instrument) {
    instrument.id ? this.updateInstrument(instrument) : this.createInstrument(instrument);
  }

  createInstrument(instrument) {
    this.energyService.createInstrument(instrument)
      .subscribe(res => {
        this.getInstruments();
        this.reset();
      })
  }

  updateInstrument(instrument) {
    this.energyService.updateInstrument(instrument)
      .subscribe(res => {
        this.getInstruments();
        this.reset();
      })
  }

  deleteInstrument(instrumentId) {
    this.energyService.deleteInstrument(instrumentId)
      .subscribe(res => {
        this.getInstruments()
        this.reset();
      })
  }

}
