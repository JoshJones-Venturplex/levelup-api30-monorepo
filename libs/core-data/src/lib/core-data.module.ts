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
@NgModule({
  imports: [CommonModule],
  providers: [FruitService]
})
export class CoreDataModule {}
