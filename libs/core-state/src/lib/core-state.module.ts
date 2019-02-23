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
import { CharacterStateModule } from 'libs/core-state/src/lib/asoiaf-state/character-state.module';
import { AsoiafService } from 'libs/core-data/src/lib/services/asoiaf.service';
import { SpotifyStateModule } from 'libs/core-state/src/lib/spotify-state/spotify-state.module';
import { SpotifyAuthService } from 'libs/core-data/src/lib/services/spotify-auth.service';
@NgModule({
  imports: [CommonModule, PlayerStateModule, BurgerStateModule, CheeseStateModule, TacoStateModule, CharacterStateModule, SpotifyStateModule],
  providers: [PlayerService, BurgerService, TacoService, AsoiafService, SpotifyAuthService]
})
export class CoreStateModule {}
