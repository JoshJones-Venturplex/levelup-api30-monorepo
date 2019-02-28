import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dev } from '@workspace/core-data';

@Component({
  selector: 'workspace-dev-detail',
  templateUrl: './dev-detail.component.html',
  styleUrls: ['./dev-detail.component.scss']
})
export class DevDetailComponent implements OnChanges {
  @Input() selectedDev: Dev;
  @Output() saved: EventEmitter<Dev> = new EventEmitter();
  @Output() canceled: EventEmitter<void> = new EventEmitter();
  @Output() deleted: EventEmitter<Dev> = new EventEmitter();

  devForm: FormGroup;

  devFormErrors = {
    firstName: 'First Name is required',
    lastName: 'Last Name is required',
    status: 'Status is required'
  }

  selectOptions = [
    'Home',
    'Office',
    'Restroom',
    'Jackons'
  ]

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.devForm = this.formBuilder.group({
      firstName: [this.selectedDev ? this.selectedDev.firstName : '', Validators.required],
      lastName: [this.selectedDev ? this.selectedDev.lastName : '', Validators.required],
      status: [this.selectedDev ? this.selectedDev.status : '', Validators.required]
    });
  }

  formFieldValidator(formControlName) {
    return this.devForm.controls[formControlName].touched && !this.devForm.controls[formControlName].valid;
  }

  saveDev() {
    this.saved.emit({
      ...this.devForm.value,
      id: this.selectedDev ? this.selectedDev.id : null
    });
    this.devForm.reset();
  }

  cancel() {
    this.devForm.reset();
    this.canceled.emit();
  }
}
