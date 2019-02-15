import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitService } from './fruit.service';
import { Fruit } from './interfaces/fruit';

@NgModule({
  imports: [CommonModule],
  providers: [FruitService]
})
export class CoreDataModule {}
