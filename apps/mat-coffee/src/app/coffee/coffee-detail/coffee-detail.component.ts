import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coffee } from '@workspace/core-data';

@Component({
  selector: 'workspace-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.scss']
})
export class CoffeeDetailComponent implements OnChanges {
  @Input() selectedCoffee: Coffee;
  @Output() saved: EventEmitter<Coffee> = new EventEmitter();
  @Output() canceled: EventEmitter<void> = new EventEmitter();
  @Output() deleted: EventEmitter<Coffee> = new EventEmitter();

  coffeeForm: FormGroup;

  coffeeFormErrors = {
    flavor: 'Flavor is required',
    type: 'Type is required',
    style: 'Style is required',
    size: 'Size is required'
  }

  typeOptions = [
    'espresso',
    'latte',
    'frappuccino',
    'coldbrew',
    'macchiato'
  ]

  styleOptions = [
    'iced',
    'hot'
  ]

  sizeOptions = [
    'tall',
    'grande',
    'venti'
  ]

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.coffeeForm = this.formBuilder.group({
      flavor: [this.selectedCoffee ? this.selectedCoffee.flavor : '', Validators.required],
      type: [this.selectedCoffee ? this.selectedCoffee.type : '', Validators.required],
      style: [this.selectedCoffee ? this.selectedCoffee.style : '', Validators.required],
      size: [this.selectedCoffee ? this.selectedCoffee.size : '', Validators.required],
    });
  }

  formFieldValidator(formControlName) {
    return this.coffeeForm.controls[formControlName].touched && !this.coffeeForm.controls[formControlName].valid;
  }

  saveCoffee() {
    this.saved.emit({
      ...this.coffeeForm.value,
      id: this.selectedCoffee.id
    });
    this.coffeeForm.reset();
  }

  cancel() {
    this.coffeeForm.reset();
    this.canceled.emit();
  }
}
