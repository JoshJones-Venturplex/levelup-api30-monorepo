import { Component, OnInit } from '@angular/core';
import { GameService } from '../shared/game.service';

@Component({
  selector: 'workspace-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  games: any[];
  selectedGame: any;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.getGames();
  }

  reset() {
    this.selectedGame = null;
  }

  getGames() {
    this.gameService.getGames().subscribe(res => {
      this.games = res;
    });
  }

  selectGame(game) {
    this.selectedGame = game;
  }

  saveGame(game) {
    game.id ? this.updateGame(game) : this.createGame(game);
  }

  createGame(game) {
    this.gameService.createGame(game)
      .subscribe(res => {
        this.getGames();
        this.reset();
      })
  }
  
  updateGame(game) {
    this.gameService.updateGame(game)
      .subscribe(res => {
        this.getGames();
        this.reset();
      })
  }

  deleteGame(game) {
    this.gameService.deleteGame(game)
      .subscribe(res => {
        this.getGames();
        this.reset();
      })
  }
}
