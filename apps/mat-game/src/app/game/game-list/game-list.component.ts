import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'workspace-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent {
  @Input() games: any[];
  @Output() gameSelected: EventEmitter<any> = new EventEmitter();
  @Output() reset: EventEmitter<any> = new EventEmitter();

  constructor() { }

  selectGame(game) {
    this.gameSelected.emit(game);
  }
}
