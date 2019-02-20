import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitService } from './fruit.service';
import { Fruit } from './interfaces/fruit';
import { Player } from './interfaces/player';
import { PlayerService } from './services/player.service';
import { Burger } from './interfaces/burger';
import { BurgerService } from './services/burger.service';
import { Cheese } from './interfaces/cheese';
import { CheeseService } from './services/cheese.service';

@NgModule({
  imports: [CommonModule],
  providers: [FruitService]
})
export class CoreDataModule {}
