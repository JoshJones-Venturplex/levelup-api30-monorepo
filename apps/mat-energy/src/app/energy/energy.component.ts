import { Component, OnInit } from '@angular/core';
import { EnergyService } from '../shared/energy.service';

@Component({
  selector: 'workspace-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.scss']
})
export class EnergyComponent implements OnInit {
  drinks: any[];
  selectedDrink: any;

  constructor(private energyService: EnergyService) { }

  ngOnInit() {
    this.getDrinks();
  }

  reset() {
    this.selectedDrink = null;
  }

  getDrinks() {
    this.energyService.getDrinks()
      .subscribe(res => this.drinks = res);
  }

  selectDrink(drink) {
    this.selectedDrink = drink;
  }

  saveDrink(drink) {
    drink.id ? this.updateDrink(drink) : this.createDrink(drink);
  }

  createDrink(drink) {
    this.energyService.createDrink(drink)
      .subscribe(res => {
        this.getDrinks();
        this.reset();
      })
  }

  updateDrink(drink) {
    this.energyService.updateDrink(drink)
      .subscribe(res => {
        this.getDrinks();
        this.reset();
      })
  }

  deleteDrink(drinkId) {
    this.energyService.deleteDrink(drinkId)
      .subscribe(res => {
        this.getDrinks()
        this.reset();
      })
  }

}
