import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerStateModule } from 'libs/core-state/src/lib/player-state/player-state.module';
import { PlayerService } from 'libs/core-data/src/lib/services/player.service';

@NgModule({
  imports: [CommonModule, PlayerStateModule],
  providers: [PlayerService]
})
export class CoreStateModule {}
