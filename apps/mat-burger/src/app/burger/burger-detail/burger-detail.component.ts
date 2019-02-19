import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Burger } from '@workspace/core-data';

@Component({
  selector: 'workspace-burger-detail',
  templateUrl: './burger-detail.component.html',
  styleUrls: ['./burger-detail.component.scss']
})
export class BurgerDetailComponent implements OnChanges {
  @Input() selectedBurger: Burger;
  @Output() saved: EventEmitter<Burger> = new EventEmitter();
  @Output() canceled: EventEmitter<void> = new EventEmitter();
  @Output() deleted: EventEmitter<Burger> = new EventEmitter();

  burgerForm: FormGroup;

  burgerFormErrors = {
    name: 'Name is required',
    calories: 'Calories is required',
    protein: 'Protein is required',
    carbs: 'Carbs is required'
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.burgerForm = this.formBuilder.group({
      name: [this.selectedBurger ? this.selectedBurger.name : '', Validators.required],
      calories: [this.selectedBurger ? this.selectedBurger.calories : '', Validators.required],
      protein: [this.selectedBurger ? this.selectedBurger.protein : '', Validators.required],
      carbs: [this.selectedBurger ? this.selectedBurger.carbs : '', Validators.required]
    });
  }

  formFieldValidator(formControlName) {
    return this.burgerForm.controls[formControlName].touched && !this.burgerForm.controls[formControlName].valid;
  }

  saveBurger() {
    this.saved.emit({
      ...this.burgerForm.value,
      id: this.selectedBurger ? this.selectedBurger.id : null
    });
    this.burgerForm.reset();
  }

  cancel() {
    this.burgerForm.reset();
    this.canceled.emit();
  }
}
