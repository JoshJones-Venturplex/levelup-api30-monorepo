import { Component, OnInit } from '@angular/core';
import { PokemonFacade, PokemonDetailsFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';
import { Pokemon, PokemonDetail } from '@workspace/core-data';

@Component({
  selector: 'workspace-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemons$: Observable<Pokemon[]> = this.pokemonsFacade.allPokemons$;
  pokemonDetails$: Observable<PokemonDetail[]> = this.pokemonDetailsFacade.allPokemonDetails$;
  currentPokemon$: Observable<Pokemon> = this.pokemonsFacade.currentPokemon$;
  currentPokemonDetails$: Observable<PokemonDetail> = this.pokemonDetailsFacade.currentPokemonDetails$;
  offsetNumber: number = 0;

  constructor(private pokemonsFacade: PokemonFacade, private pokemonDetailsFacade: PokemonDetailsFacade) {}

  ngOnInit() {
    this.pokemonsFacade.loadPokemons(this.offsetNumber);
  }

  changeOffset(number) {
    this.offsetNumber += number;
    this.pokemonsFacade.loadPokemons(this.offsetNumber);
  }

  selectPokemon(pokemon) {
    this.pokemonDetailsFacade.loadPokemonDetails(pokemon.url);
    this.pokemonDetailsFacade.selectPokemonDetails(pokemon.name)
  }

  clampRange(val, min, max) {
    return val > max ? max : val < min ? min : val;
  }
}
