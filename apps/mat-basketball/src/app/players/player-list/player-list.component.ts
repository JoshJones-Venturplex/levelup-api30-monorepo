import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Player } from '@workspace/core-data';

@Component({
  selector: 'workspace-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent {
  @Input() players: Player[];
  @Output() playerSelected: EventEmitter<Player> = new EventEmitter();
  @Output() reset: EventEmitter<void> = new EventEmitter();

  constructor() { }

  selectPlayer(player) {
    this.playerSelected.emit(player);
  }
}
