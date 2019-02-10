import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../shared/pizza.service';

@Component({
  selector: 'workspace-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  pizzas: any[];
  selectedPizza: any;

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.getPizzas();
  }

  reset() {
    this.selectedPizza = null;
  }

  getPizzas() {
    this.pizzaService.getPizzas()
      .subscribe(res => this.pizzas = res);
  }

  selectPizza(pizza) {
    this.selectedPizza = pizza;
  }

  savePizza(pizza) {
    pizza.id ? this.updatePizza(pizza) : this.createPizza(pizza);
  }

  createPizza(pizza) {
    this.pizzaService.createPizza(pizza)
      .subscribe(res => {
        this.getPizzas();
        this.reset();
      })
  }

  updatePizza(pizza) {
    this.pizzaService.updatePizza(pizza)
      .subscribe(res => {
        this.getPizzas();
        this.reset();
      })
  }

  deletePizza(pizzaId) {
    this.pizzaService.deletePizza(pizzaId)
      .subscribe(res => {
        this.getPizzas()
        this.reset();
      })
  }

}

