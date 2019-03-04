import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitService } from './fruit.service';
import { Fruit } from './interfaces/fruit';
import { Player } from './interfaces/player';
import { PlayerService } from './services/player.service';
import { Burger } from './interfaces/burger';
import { BurgerService } from './services/burger.service';
import { Cheese } from './interfaces/cheese';
import { CheeseService } from './services/cheese.service';
import { Taco } from './interfaces/taco';
import { TacoService } from './services/taco.service';
import { Character } from './interfaces/character';
import { AsoiafService } from './services/asoiaf.service';
import { SpotifyService } from './services/spotify.service';
import { SpotifyAuthService } from './services/spotify-auth.service'
import { SpotifyAuthGuard } from './services/spotify-auth.guard'
import { Album } from './interfaces/album';
import { TokenInterceptor } from './services/spotify.interceptor';
import { Amiibo } from './interfaces/amiibo';
import { AmiiboService } from './services/amiibo.service';
import { Pokemon } from './interfaces/pokemon';
import { PokemonDetail } from './interfaces/pokemon-detail';
import { PokemonService } from './services/pokemon.service';
import { Movie, MovieInfo } from './interfaces/movie';
import { MovieService } from './services/movie.service';
import { Ship } from './interfaces/ship';
import { SpacexService } from './services/spacex.service';
import { Dev } from './interfaces/dev';
import { VenturplexService } from './services/venturplex.service';
import { Item } from './interfaces/inventory';
import { InventoryService } from './services/inventory.service';
import { Ticket } from './interfaces/ticket';
import { TicketService } from './services/ticket.service';
import { Coffee } from './interfaces/coffee';
import { CoffeeService } from './services/coffee.service';
import { Smoothie } from './interfaces/smoothie';
import { SmoothieService } from './services/smoothie.service';
@NgModule({
  imports: [CommonModule],
  providers: [FruitService]
})
export class CoreDataModule {}
