import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitService } from './fruit.service';
import { Fruit } from './interfaces/fruit';
import { Player } from './interfaces/player';
import { PlayerService } from './services/player.service';

@NgModule({
  imports: [CommonModule],
  providers: [FruitService]
})
export class CoreDataModule {}
