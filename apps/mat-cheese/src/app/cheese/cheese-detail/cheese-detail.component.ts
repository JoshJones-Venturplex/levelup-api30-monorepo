import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cheese } from '@workspace/core-data';

@Component({
  selector: 'workspace-cheese-detail',
  templateUrl: './cheese-detail.component.html',
  styleUrls: ['./cheese-detail.component.scss']
})
export class CheeseDetailComponent implements OnChanges {
  @Input() selectedCheese: Cheese;
  @Output() saved: EventEmitter<Cheese> = new EventEmitter();
  @Output() canceled: EventEmitter<void> = new EventEmitter();
  @Output() deleted: EventEmitter<Cheese> = new EventEmitter();

  cheeseForm: FormGroup;

  cheeseFormErrors = {
    name: 'Name is required',
    calories: 'Calories is required',
    origin: 'Origin is required',
    carbs: 'Carbs is required'
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.cheeseForm = this.formBuilder.group({
      name: [this.selectedCheese ? this.selectedCheese.name : '', Validators.required],
      calories: [this.selectedCheese ? this.selectedCheese.calories : '', Validators.required],
      origin: [this.selectedCheese ? this.selectedCheese.origin : '', Validators.required],
      carbs: [this.selectedCheese ? this.selectedCheese.carbs : '', Validators.required]
    });
  }

  formFieldValidator(formControlName) {
    return this.cheeseForm.controls[formControlName].touched && !this.cheeseForm.controls[formControlName].valid;
  }

  saveCheese() {
    this.saved.emit({
      ...this.cheeseForm.value,
      id: this.selectedCheese ? this.selectedCheese.id : null
    });
    this.cheeseForm.reset();
  }

  cancel() {
    this.cheeseForm.reset();
    this.canceled.emit();
  }
}
