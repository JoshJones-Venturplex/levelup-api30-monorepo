import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bagel } from '@workspace/core-data';

@Component({
  selector: 'workspace-bagel-detail',
  templateUrl: './bagel-detail.component.html',
  styleUrls: ['./bagel-detail.component.scss']
})
export class BagelDetailComponent implements OnChanges {
  @Input() selectedBagel: Bagel;
  @Output() saved: EventEmitter<Bagel> = new EventEmitter();
  @Output() canceled: EventEmitter<void> = new EventEmitter();
  @Output() deleted: EventEmitter<Bagel> = new EventEmitter();

  bagelForm: FormGroup;

  bagelFormErrors = {
    flavor: 'Flavor is required',
    spread: 'Spread is required',
    addons: 'Addon is required',
    calories: 'Calories is required',
    size: 'Size is required'
  }

  spreadOptions = [
    'plain',
    'salmon',
    'jalepeno',
    'strawberry',
    'garden herb',
    'none'
  ]

  addonsOptions = [
    'ham',
    'turkey',
    'lox',
    'eggs and bacon',
    'none'
  ]

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.bagelForm = this.formBuilder.group({
      flavor: [this.selectedBagel ? this.selectedBagel.flavor : '', Validators.required],
      spread: [this.selectedBagel ? this.selectedBagel.spread : '', Validators.required],
      addons: [this.selectedBagel ? this.selectedBagel.addons : '', Validators.required],
      toasted: [this.selectedBagel ? this.selectedBagel.addons : ''],
      calories: [this.selectedBagel ? this.selectedBagel.calories : '', Validators.required]
    });
  }

  formFieldValidator(formControlName) {
    return this.bagelForm.controls[formControlName].touched && !this.bagelForm.controls[formControlName].valid;
  }

  saveBagel() {
    this.saved.emit({
      ...this.bagelForm.value,
      id: this.selectedBagel ? this.selectedBagel.id : null
    });
    this.bagelForm.reset();
  }

  cancel() {
    this.bagelForm.reset();
    this.canceled.emit();
  }
}
