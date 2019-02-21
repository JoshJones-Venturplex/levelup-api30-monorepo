import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Taco } from '@workspace/core-data';

@Component({
  selector: 'workspace-taco-detail',
  templateUrl: './taco-detail.component.html',
  styleUrls: ['./taco-detail.component.scss']
})
export class TacoDetailComponent implements OnChanges {
  @Input() selectedTaco: Taco;
  @Output() saved: EventEmitter<Taco> = new EventEmitter();
  @Output() canceled: EventEmitter<void> = new EventEmitter();
  @Output() deleted: EventEmitter<Taco> = new EventEmitter();

  tacoForm: FormGroup;

  tacoFormErrors = {
    name: 'Name is required',
    calories: 'Calories is required',
    origin: 'Origin is required',
    carbs: 'Carbs is required'
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.tacoForm = this.formBuilder.group({
      name: [this.selectedTaco ? this.selectedTaco.name : '', Validators.required],
      calories: [this.selectedTaco ? this.selectedTaco.calories : '', Validators.required],
      protein: [this.selectedTaco ? this.selectedTaco.protein : '', Validators.required],
      salsa: [this.selectedTaco ? this.selectedTaco.salsa : '', Validators.required]
    });
  }

  formFieldValidator(formControlName) {
    return this.tacoForm.controls[formControlName].touched && !this.tacoForm.controls[formControlName].valid;
  }

  saveTaco() {
    this.saved.emit({
      ...this.tacoForm.value,
      id: this.selectedTaco ? this.selectedTaco.id : null
    });
    this.tacoForm.reset();
  }

  cancel() {
    this.tacoForm.reset();
    this.canceled.emit();
  }
}
