import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Soda } from '../../shared/soda';

@Component({
  selector: 'workspace-soda-detail',
  templateUrl: './soda-detail.component.html',
  styleUrls: ['./soda-detail.component.scss']
})
export class SodaDetailComponent implements OnChanges {
  @Input() selectedSoda: Soda;
  @Output() saved: EventEmitter<Soda> = new EventEmitter();
  @Output() canceled: EventEmitter<void> = new EventEmitter();
  @Output() deleted: EventEmitter<Soda> = new EventEmitter();

  sodaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.sodaForm = this.formBuilder.group({
      name: [this.selectedSoda ? this.selectedSoda.name : ''],
      created: [this.selectedSoda ? this.selectedSoda.created : ''],
      calories: [this.selectedSoda ? this.selectedSoda.calories : ''],
      sugar: [this.selectedSoda ? this.selectedSoda.sugar : '']
    });
  }

  saveSoda() {
    this.saved.emit({
      ...this.sodaForm.value,
      id: this.selectedSoda ? this.selectedSoda.id : null
    });
    this.sodaForm.reset();
  }

  cancel() {
    this.sodaForm.reset();
    this.canceled.emit();
  }
}
