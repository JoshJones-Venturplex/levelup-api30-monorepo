import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerStateModule } from 'libs/core-state/src/lib/player-state/player-state.module';
import { PlayerService } from 'libs/core-data/src/lib/services/player.service';
import { BurgerStateModule } from 'libs/core-state/src/lib/burger-state/burger-state.module';
import { BurgerService } from 'libs/core-data/src/lib/services/burger.service';
import { CheeseStateModule } from 'libs/core-state/src/lib/cheese-state/cheese-state.module';
import { CheeseService } from 'libs/core-data/src/lib/services/cheese.service';
import { TacoStateModule } from 'libs/core-state/src/lib/taco-state/taco-state.module';
import { TacoService } from 'libs/core-data/src/lib/services/taco.service';
@NgModule({
  imports: [CommonModule, PlayerStateModule, BurgerStateModule, CheeseStateModule, TacoStateModule],
  providers: [PlayerService, BurgerService, TacoService]
})
export class CoreStateModule {}
