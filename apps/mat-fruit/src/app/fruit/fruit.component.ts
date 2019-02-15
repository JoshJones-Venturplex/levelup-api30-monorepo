import { Component, OnInit } from '@angular/core';
import { FruitService, Fruit } from '@workspace/core-data'

@Component({
  selector: 'workspace-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss']
})
export class FruitComponent implements OnInit {
  fruits: Fruit[];
  selectedFruit: Fruit;

  constructor(private fruitService: FruitService) {}

  ngOnInit() {
    this.getFruits();
  }

  reset() {
    this.selectedFruit = null;
  }

  getFruits() {
    this.fruitService.getFruits().subscribe(res => {
      this.fruits = res;
    });
  }

  selectFruit(fruit) {
    this.selectedFruit = fruit;
  }

  saveFruit(fruit) {
    fruit.id ? this.updateFruit(fruit) : this.createFruit(fruit);
  }

  createFruit(fruit) {
    this.fruitService.createFruit(fruit)
      .subscribe(res => {
        this.getFruits();
        this.reset();
      })
  }
  
  updateFruit(fruit) {
    this.fruitService.updateFruit(fruit)
      .subscribe(res => {
        this.getFruits();
        this.reset();
      })
  }

  deleteFruit(fruit) {
    this.fruitService.deleteFruit(fruit)
      .subscribe(res => {
        this.getFruits();
        this.reset();
      })
  }
}
