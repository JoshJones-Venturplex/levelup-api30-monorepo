import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokemonDetail } from '@workspace/core-data';

@Component({
  selector: 'workspace-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {
  @Input() selectedPokemonDetails: PokemonDetail;

  constructor() {}
}
