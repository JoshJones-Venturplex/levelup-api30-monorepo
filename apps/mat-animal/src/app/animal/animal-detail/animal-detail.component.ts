import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Animal } from '../../shared/animal';

@Component({
  selector: 'workspace-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent implements OnChanges {
  @Input() selectedAnimal: Animal;
  @Output() saved: EventEmitter<Animal> = new EventEmitter();
  @Output() canceled: EventEmitter<void> = new EventEmitter();
  @Output() deleted: EventEmitter<Animal> = new EventEmitter();

  animalForm: FormGroup;

  animalFormErrors = {
    name: 'Name is required',
    height: 'Height is required',
    mass: 'Mass is required',
    continent: 'Continent is required'
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.animalForm = this.formBuilder.group({
      name: [this.selectedAnimal ? this.selectedAnimal.name : '', Validators.required],
      mass: [this.selectedAnimal ? this.selectedAnimal.mass : '', Validators.required],
      height: [this.selectedAnimal ? this.selectedAnimal.height : '', Validators.required],
      continent: [this.selectedAnimal ? this.selectedAnimal.continent : '', Validators.required]
    });
  }

  formFieldValidator(formControlName) {
    return this.animalForm.controls[formControlName].touched && !this.animalForm.controls[formControlName].valid;
  }

  saveAnimal() {
    this.saved.emit({
      ...this.animalForm.value,
      id: this.selectedAnimal ? this.selectedAnimal.id : null
    });
    this.animalForm.reset();
  }

  cancel() {
    this.animalForm.reset();
    this.canceled.emit();
  }
}
