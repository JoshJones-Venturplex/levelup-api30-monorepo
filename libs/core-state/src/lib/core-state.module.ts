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
import { AmiiboStateModule } from 'libs/core-state/src/lib/amiibo-state/amiibo-state.module';
import { AmiiboService } from 'libs/core-data/src/lib/services/amiibo.service';
import { PokemonStateModule } from 'libs/core-state/src/lib/pokemon-state/pokemon-state.module';
import { PokemonService } from 'libs/core-data/src/lib/services/pokemon.service';
import { MovieStateModule } from 'libs/core-state/src/lib/movie-state/movie-state.module';
import { MovieService } from 'libs/core-data/src/lib/services/movie.service';
import { SpacexStateModule } from 'libs/core-state/src/lib/spacex-state/spacex-state.module';
import { SpacexService } from 'libs/core-data/src/lib/services/spacex.service';
import { VenturplexStateModule } from 'libs/core-state/src/lib/venturplex-state/venturplex-state.module';
import { VenturplexService } from 'libs/core-data/src/lib/services/venturplex.service';
import { InventoryStateModule } from 'libs/core-state/src/lib/inventory-state/inventory-state.module';
import { InventoryService } from 'libs/core-data/src/lib/services/inventory.service';
import { TicketStateModule } from 'libs/core-state/src/lib/ticket-state/ticket-state.module';
import { TicketService } from 'libs/core-data/src/lib/services/ticket.service';
import { CoffeeStateModule } from 'libs/core-state/src/lib/coffee-state/coffee-state.module';
import { CoffeeService } from 'libs/core-data/src/lib/services/coffee.service';
@NgModule({
  imports: [CommonModule, PlayerStateModule, BurgerStateModule, CheeseStateModule, TacoStateModule, CharacterStateModule, SpotifyStateModule, AmiiboStateModule, PokemonStateModule, MovieStateModule, SpacexStateModule, VenturplexStateModule, InventoryStateModule, TicketStateModule, CoffeeStateModule],
  providers: [PlayerService, BurgerService, TacoService, AsoiafService, SpotifyAuthService, AmiiboService, PokemonService, MovieService, VenturplexService, InventoryService, TicketService, CoffeeService]
})
export class CoreStateModule {}