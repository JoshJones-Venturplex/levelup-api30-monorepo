import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'workspace-instrument-detail',
  templateUrl: './instrument-detail.component.html',
  styleUrls: ['./instrument-detail.component.scss']
})
export class InstrumentDetailComponent implements OnChanges {
  @Input() selectedInstrument;
  @Output() saved: EventEmitter<any> = new EventEmitter();
  @Output() canceled: EventEmitter<any> = new EventEmitter();
  @Output() deleted: EventEmitter<any> = new EventEmitter();

  instrumentForm: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges() {
    this.instrumentForm = this.formBuilder.group({
      name: [this.selectedInstrument ? this.selectedInstrument.name : ''],
      year: [this.selectedInstrument ? this.selectedInstrument.year : ''],
      inventor: [this.selectedInstrument ? this.selectedInstrument.inventor : ''],
      country: [this.selectedInstrument ? this.selectedInstrument.country : '']
    })
  }

  saveInstrument() {
    this.saved.emit({
      ...this.instrumentForm.value,
      id: this.selectedInstrument ? this.selectedInstrument.id : null
    })
  }

  cancel() {
    this.instrumentForm.reset();
    this.canceled.emit()
  }

}
