import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.animalForm = this.formBuilder.group({
      name: [this.selectedAnimal ? this.selectedAnimal.name : ''],
      mass: [this.selectedAnimal ? this.selectedAnimal.mass : ''],
      height: [this.selectedAnimal ? this.selectedAnimal.height : ''],
      continent: [this.selectedAnimal ? this.selectedAnimal.continent : '']
    });
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
