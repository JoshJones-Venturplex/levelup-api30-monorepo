import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Animal } from '../../shared/animal';

@Component({
  selector: 'workspace-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent {
  @Input() animals: Animal[];
  @Output() animalSelected: EventEmitter<Animal> = new EventEmitter();
  @Output() reset: EventEmitter<void> = new EventEmitter();

  constructor() { }

  selectAnimal(animal) {
    this.animalSelected.emit(animal);
  }
}
