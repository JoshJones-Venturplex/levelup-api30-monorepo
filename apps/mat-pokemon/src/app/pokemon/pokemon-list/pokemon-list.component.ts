import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '@workspace/core-data';

@Component({
  selector: 'workspace-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  @Input() pokemons: Pokemon[];
  @Output() pokemonSelected: EventEmitter<Pokemon> = new EventEmitter();
  @Output() offsetChange: EventEmitter<number> = new EventEmitter;

  constructor() { }

  selectPokemon(pokemon) {
    this.pokemonSelected.emit(pokemon);
  }

  changeOffset(offset) {
    this.offsetChange.emit(offset);
  }
}