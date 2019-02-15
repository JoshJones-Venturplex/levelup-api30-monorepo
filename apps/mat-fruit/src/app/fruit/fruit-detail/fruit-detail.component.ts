import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fruit } from '@workspace/core-data'

@Component({
  selector: 'workspace-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.scss']
})
export class FruitDetailComponent implements OnChanges {
  @Input() selectedFruit: Fruit;
  @Output() saved: EventEmitter<Fruit> = new EventEmitter();
  @Output() canceled: EventEmitter<void> = new EventEmitter();
  @Output() deleted: EventEmitter<Fruit> = new EventEmitter();

  fruitForm: FormGroup;

  fruitFormErrors = {
    name: 'Name is required',
    calories: 'Calories is required',
    carbohydrates: 'Carbohydrates is required',
    sugar: 'Sugar is required'
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.fruitForm = this.formBuilder.group({
      name: [this.selectedFruit ? this.selectedFruit.name : '', Validators.required],
      calories: [this.selectedFruit ? this.selectedFruit.calories : '', Validators.required],
      carbohydrates: [this.selectedFruit ? this.selectedFruit.carbohydrates : '', Validators.required],
      sugar: [this.selectedFruit ? this.selectedFruit.sugar : '', Validators.required]
    });
  }

  formFieldValidator(formControlName) {
    return this.fruitForm.controls[formControlName].touched && !this.fruitForm.controls[formControlName].valid;
  }

  saveFruit() {
    this.saved.emit({
      ...this.fruitForm.value,
      id: this.selectedFruit ? this.selectedFruit.id : null
    });
    this.fruitForm.reset();
  }

  cancel() {
    this.fruitForm.reset();
    this.canceled.emit();
  }
}
