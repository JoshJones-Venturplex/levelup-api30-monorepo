import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../shared/animal.service';
import { Animal } from '../shared/animal';

@Component({
  selector: 'workspace-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {
  animals: Animal[];
  selectedAnimal: Animal;

  constructor(private animalService: AnimalService) {}

  ngOnInit() {
    this.getAnimals();
  }

  reset() {
    this.selectedAnimal = null;
  }

  getAnimals() {
    this.animalService.getAnimals().subscribe(res => {
      this.animals = res;
    });
  }

  selectAnimal(animal) {
    this.selectedAnimal = animal;
  }

  saveAnimal(animal) {
    animal.id ? this.updateAnimal(animal) : this.createAnimal(animal);
  }

  createAnimal(animal) {
    this.animalService.createAnimal(animal)
      .subscribe(res => {
        this.getAnimals();
        this.reset();
      })
  }
  
  updateAnimal(animal) {
    this.animalService.updateAnimal(animal)
      .subscribe(res => {
        this.getAnimals();
        this.reset();
      })
  }

  deleteAnimal(animal) {
    this.animalService.deleteAnimal(animal)
      .subscribe(res => {
        this.getAnimals();
        this.reset();
      })
  }
}
