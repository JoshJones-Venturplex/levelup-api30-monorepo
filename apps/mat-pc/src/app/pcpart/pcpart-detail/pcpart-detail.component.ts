import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pcpart } from '@workspace/core-data';

@Component({
  selector: 'workspace-pcpart-detail',
  templateUrl: './pcpart-detail.component.html',
  styleUrls: ['./pcpart-detail.component.scss']
})
export class PcpartDetailComponent implements OnChanges {
  @Input() selectedPcpart: Pcpart;
  @Output() saved: EventEmitter<Pcpart> = new EventEmitter();
  @Output() canceled: EventEmitter<void> = new EventEmitter();
  @Output() deleted: EventEmitter<Pcpart> = new EventEmitter();

  pcpartForm: FormGroup;

  pcpartFormErrors = {
    name: 'Name is required',
    type: 'Type is required',
    release_year: 'Year released is required',
  }

  typeOptions = [
    'cpu',
    'graphics card',
    'case',
    'power supply',
    'motherboard',
    'ram',
    'storage',
    'peripheral'
  ]

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.pcpartForm = this.formBuilder.group({
      name: [this.selectedPcpart ? this.selectedPcpart.name : '', Validators.required],
      type: [this.selectedPcpart ? this.selectedPcpart.type : '', Validators.required],
      release_year: [this.selectedPcpart ? this.selectedPcpart.release_year : '', Validators.required]
    });
  }

  formFieldValidator(formControlName) {
    return this.pcpartForm.controls[formControlName].touched && !this.pcpartForm.controls[formControlName].valid;
  }

  savePcpart() {
    this.saved.emit({
      ...this.pcpartForm.value,
      id: this.selectedPcpart ? this.selectedPcpart.id : null
    });
    this.pcpartForm.reset();
  }

  cancel() {
    this.pcpartForm.reset();
    this.canceled.emit();
  }
}
