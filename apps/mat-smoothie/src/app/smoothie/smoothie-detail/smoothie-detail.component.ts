import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Smoothie } from '@workspace/core-data';

@Component({
  selector: 'workspace-smoothie-detail',
  templateUrl: './smoothie-detail.component.html',
  styleUrls: ['./smoothie-detail.component.scss']
})
export class SmoothieDetailComponent implements OnChanges {
  @Input() selectedSmoothie: Smoothie;
  @Output() saved: EventEmitter<Smoothie> = new EventEmitter();
  @Output() canceled: EventEmitter<void> = new EventEmitter();
  @Output() deleted: EventEmitter<Smoothie> = new EventEmitter();

  smoothieForm: FormGroup;

  smoothieFormErrors = {
    flavor: 'Flavor is required',
    mixin: 'Mixin is required',
    calories: 'Calories is required',
    size: 'Size is required'
  }

  mixinOptions = [
    'boba',
    'popping boba',
    'protein powder',
    'espresso',
    'none'
  ]

  sizeOptions = [
    'small',
    'medium',
    'large'
  ]

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.smoothieForm = this.formBuilder.group({
      flavor: [this.selectedSmoothie ? this.selectedSmoothie.flavor : '', Validators.required],
      mixin: [this.selectedSmoothie ? this.selectedSmoothie.mixin : '', Validators.required],
      calories: [this.selectedSmoothie ? this.selectedSmoothie.calories : '', Validators.required],
      size: [this.selectedSmoothie ? this.selectedSmoothie.size : '', Validators.required],
    });
  }

  formFieldValidator(formControlName) {
    return this.smoothieForm.controls[formControlName].touched && !this.smoothieForm.controls[formControlName].valid;
  }

  saveSmoothie() {
    this.saved.emit({
      ...this.smoothieForm.value,
      id: this.selectedSmoothie ? this.selectedSmoothie.id : null
    });
    this.smoothieForm.reset();
  }

  cancel() {
    this.smoothieForm.reset();
    this.canceled.emit();
  }
}
