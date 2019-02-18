import { Component, OnInit } from '@angular/core';
import { PlayersFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';
import { Player } from '@workspace/core-data';

@Component({
  selector: 'workspace-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players$: Observable<Player[]> = this.playersFacade.allPlayers$;
  currentPlayer$: Observable<Player> = this.playersFacade.currentPlayer$;

  constructor(private playersFacade: PlayersFacade) {}

  ngOnInit() {
    this.playersFacade.loadPlayers();
    this.playersFacade.mutations$.subscribe(_ => this.resetCurrentPlayer());
    this.resetCurrentPlayer();
  }

  resetCurrentPlayer() {
    this.selectPlayer({ id: null });
  }

  selectPlayer(player) {
    this.playersFacade.selectPlayer(player.id);
  }

  savePlayer(player) {
    if (!player.id) {
      this.playersFacade.addPlayer(player);
    } else {
      this.playersFacade.updatePlayer(player);
    }
  }

  deletePlayer(player) {
    this.playersFacade.deletePlayer(player);
  }
}
